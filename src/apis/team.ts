import { DYNAMIC_API_PATH } from '@constants/routes';
import axios from 'axios';

import { AtBat } from '@typings/atbat';
import { Game } from '@typings/game';
import { Player, PositionType } from '@typings/player';
import { Team, TeamStanding } from '@typings/team';

import { fetcher } from '@src/apis/fetcher';

export const requestGetTeamList = async (leagueId?: number, divisionId?: number): Promise<Team[]> => {
    const basePath = DYNAMIC_API_PATH.TEAM_LIST();
    const path = divisionId
        ? `${basePath}&divisionId=eq.${divisionId}`
        : leagueId
        ? `${basePath}&leagueId=eq.${leagueId}`
        : basePath;
    return await fetcher({ method: 'get', path });
};

export const requestGetTeam = async (teamId: number): Promise<Team> => {
    const path = DYNAMIC_API_PATH.TEAM_DETAIL(teamId);
    return await fetcher({ method: 'get', path });
};

export const requestGetGameListByTeam = async (teamId: number): Promise<Game[]> => {
    const path = DYNAMIC_API_PATH.TEAM_GAME_LIST(teamId);
    return await fetcher({ method: 'get', path });
};

export const requestGetLatestGameListByTeam = async (teamId: number): Promise<Game[]> => {
    const gameList = await requestGetGameListByTeam(teamId);
    return gameList.slice(0, 5);
};

export const requestGetAtbatListByTeam = async (teamId: number): Promise<AtBat[]> => {
    const path = DYNAMIC_API_PATH.TEAM_ATBAT_LIST(teamId);
    return await fetcher({ method: 'get', path });
};

export const requestGetLatestAtbatListByTeam = async (teamId: number): Promise<AtBat[]> => {
    const atbatList = await requestGetAtbatListByTeam(teamId);
    const latestGameList = await requestGetLatestGameListByTeam(teamId);
    const latestGameIdList = latestGameList.map((game) => game.id);

    return atbatList.filter((atbat) => latestGameIdList.includes(atbat.game.id));
};

export const requestGetTeamRoster = async (teamId: number, positionType?: PositionType): Promise<Player[]> => {
    const basePath = DYNAMIC_API_PATH.TEAM_ROSTER(teamId);
    const path = !positionType || positionType === 'ALL' ? basePath : `${basePath}&positionType=eq.${positionType}`;
    return await fetcher({ method: 'get', path });
};

export const requestGetTeamStandings = async (
    teamId?: number,
    leagueId?: number,
    divisionId?: number,
): Promise<TeamStanding[]> => {
    const response = await axios({
        method: 'get',
        url: 'https://statsapi.mlb.com/api/v1/standings?leagueId=103,104',
    });
    const standingData = response.data;
    const records = standingData.records;

    const standings = records.flatMap((record) => {
        const leagueId = record.league.id;
        const divisionId = record.division.id;

        return record.teamRecords.map((trecord) => {
            return {
                teamId: trecord.team.id,
                teamName: trecord.team.name,
                leagueId,
                divisionId,
                divisionRank: trecord.divisionRank,
                leagueRank: trecord.leagueRank,
                gamesPlayed: trecord.gamesPlayed,
                wins: trecord.wins,
                losses: trecord.losses,
            };
        });
    });

    const filteredStandings = standings.filter((standing) => {
        const teamFilter = teamId ? standing.teamId === teamId : true;
        const leagueFilter = leagueId ? standing.leagueId === leagueId : true;
        const divisionFilter = divisionId ? standing.divisionId === divisionId : true;

        return teamFilter && leagueFilter && divisionFilter;
    });

    return filteredStandings;
};
