import axios from 'axios';

import { Player } from '@typings/player';

import { fetcher } from '@src/apis/fetcher';
import { AnyOBJ } from '@src/typings';

export interface GetPlayerListRequest {
    players: Player[];
    count: number;
}

export const requestGetPlayerList = async (page: number, searchParams?: string): Promise<GetPlayerListRequest> => {
    const range = `${(page - 1) * 10}-${page * 10 - 1}`;
    const path = searchParams ? `/api/players?page=${page}&${searchParams}` : `/api/players?page=${page}`;
    const data = await fetcher({ method: 'get', path, headers: { Range: range } });
    return data;
};

export const requestGetPlayer = async (slug: string): Promise<Player> => {
    const data = await fetcher({ method: 'get', path: `/api/players/${slug}` });
    return data;
};

export const requestGetPlayerStats = async (slug: string): Promise<AnyOBJ> => {
    const id = slug.split('-')[2];
    const url = `https://statsapi.mlb.com/api/v1/people/${id}?hydrate=stats(group=[hitting,pitching],type=season,sportId=1,force=True),currentTeam`;
    const response = await axios({
        method: 'get',
        url,
    });

    const mlbData = response.data;
    const stats = mlbData.people[0].stats;

    const seasonPitchingStats = stats.find((stat) => stat.group.displayName === 'pitching');
    const seasonBattingStats = stats.find((stat) => stat.group.displayName === 'hitting');

    const pitchingSplits = seasonPitchingStats.splits ? seasonPitchingStats.splits[0].stat : {};
    const battingSplits = seasonBattingStats.splits ? seasonBattingStats.splits[0].stat : {};

    let pitchingStats = {};
    let battingStats = {};

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
        const { gamesPlayed, strikeOuts, baseonBalls, avg, hits, homeRuns, obp, slg, ops, rbi } = battingSplits;
        battingStats = {
            gamesPlayed,
            strikeOuts,
            baseonBalls,
            avg,
            hits,
            homeRuns,
            obp,
            slg,
            ops,
            rbi,
        };
    }

    return { pitchingStats, battingStats };
};
