import { DYNAMIC_API_PATH } from '@constants/routes';
import axios from 'axios';

import { AtBat } from '@typings/atbat';
import { Game } from '@typings/game';
import { Player, PlayerStats, PositionType } from '@typings/player';

import { convertSearchParamsToPOSTREST } from '@utils/url';

import { fetcher } from '@src/apis/fetcher';

export interface GetPlayerListRequest {
    players: Player[];
    count: number;
}

export const requestGetPlayerList = async (
    page: number,
    lastName?: string,
    positionType?: PositionType,
    searchParams?: string,
): Promise<GetPlayerListRequest> => {
    const range = `${(page - 1) * 10}-${page * 10 - 1}`;
    const basePath = DYNAMIC_API_PATH.PLAYER_LIST(lastName, positionType);
    const path = searchParams ? `${basePath}${convertSearchParamsToPOSTREST(searchParams)}` : basePath;
    const response = await fetcher({
        method: 'get',
        path,
        headers: { Range: range, Prefer: 'count=exact' },
    });
    const data = response!.data;
    const count = response!.headers['content-range'].split('/')[1];
    return { players: data, count };
};

export const requestGetPlayer = async (slug: string): Promise<Player> => {
    const path = DYNAMIC_API_PATH.PLAYER_DETAIL(slug);
    const response = await fetcher({ method: 'get', path });
    return response!.data[0];
};

export const requestGetGameByPlayerSlug = async (slug: string, positionType: PositionType): Promise<Game[]> => {
    const path = DYNAMIC_API_PATH.PLAYER_GAME_LIST(slug, positionType);
    const response = await fetcher({ method: 'get', path });
    const data = response!.data;
    const games = data.map((item) => item.game);
    const ids = games.map(({ id }) => id);
    const uniqueGames = games.filter(({ id }, index) => !ids.includes(id, index + 1));
    return uniqueGames;
};

export const requestGetLatestGameByPlayerSlug = async (slug: string, positionType: PositionType): Promise<Game[]> => {
    const gameData = await requestGetGameByPlayerSlug(slug, positionType);
    return gameData.slice(0, 5);
};

export const requestGetAtbatsByPlayerSlug = async (slug: string, positionType: PositionType): Promise<AtBat[]> => {
    const path = DYNAMIC_API_PATH.PLAYER_ATBAT_LIST(slug, positionType);
    const response = await fetcher({ method: 'get', path });
    return response!.data;
};

export const requestGetLatestAtbatsByPlayerSlug = async (
    slug: string,
    positionType: PositionType,
): Promise<AtBat[]> => {
    const atbatData = await requestGetAtbatsByPlayerSlug(slug, positionType);
    const latestGameList = await requestGetLatestGameByPlayerSlug(slug, positionType);
    const latestGameIdList = latestGameList.map((game) => game.id);
    const filteredAtbatList = atbatData.filter((atbat) => latestGameIdList.includes(atbat.game.id));

    return filteredAtbatList;
};

export const requestGetPlayerStats = async (slug: string): Promise<PlayerStats> => {
    const [id] = slug.split('-').slice(-1);
    const url = `https://statsapi.mlb.com/api/v1/people/${id}?hydrate=stats(group=[hitting,pitching],type=season,sportId=1,force=True),currentTeam`;
    const response = await axios({
        method: 'get',
        url,
    });

    const mlbData = response.data;
    const { primaryPosition, stats } = mlbData.people[0];
    const positionCode = primaryPosition.abbreviation;

    const seasonPitchingStats = stats.find((stat) => stat.group.displayName === 'pitching');
    const seasonBattingStats = stats.find((stat) => stat.group.displayName === 'hitting');

    const pitchingSplits = seasonPitchingStats ? seasonPitchingStats.splits[0].stat : {};
    const battingSplits = seasonBattingStats ? seasonBattingStats.splits[0].stat : {};

    let pitchingStats = {
        gamesPlayed: 0,
        era: 0,
        wins: 0,
        losses: 0,
        saves: 0,
        holds: 0,
        outs: 0,
        strikes: 0,
        balls: 0,
        whip: 0,
        inningsPitched: 0,
        strikeOuts: 0,
        baseOnBalls: 0,
    };
    let battingStats = {
        gamesPlayed: 0,
        strikeOuts: 0,
        baseOnBalls: 0,
        avg: 0,
        hits: 0,
        homeRuns: 0,
        obp: 0,
        slg: 0,
        ops: 0,
        rbi: 0,
    };

    if (pitchingSplits) {
        const {
            gamesPlayed,
            era,
            wins,
            losses,
            saves,
            holds,
            outs,
            strikes,
            balls,
            whip,
            inningsPitched,
            strikeOuts,
            baseOnBalls,
        } = pitchingSplits;
        pitchingStats = {
            gamesPlayed,
            era,
            wins,
            losses,
            saves,
            holds,
            outs,
            strikes,
            balls,
            whip,
            inningsPitched,
            strikeOuts,
            baseOnBalls,
        };
    }

    if (battingSplits) {
        const { gamesPlayed, strikeOuts, baseOnBalls, avg, hits, homeRuns, obp, slg, ops, rbi } = battingSplits;
        battingStats = {
            gamesPlayed,
            strikeOuts,
            baseOnBalls,
            avg,
            hits,
            homeRuns,
            obp,
            slg,
            ops,
            rbi,
        };
    }

    return { pitchingStats, battingStats, positionCode };
};
