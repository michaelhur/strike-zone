import axios from 'axios';

import { AtBat } from '@typings/atbat';
import { Game } from '@typings/game';
import { Player, PositionType } from '@typings/player';
import { Team, TeamStanding } from '@typings/team';

import { fetcher } from '@src/apis/fetcher';
import { AnyOBJ } from '@src/typings';

export const requestGetTeamList = async (leagueId?: number, divisionId?: number): Promise<Team[]> => {
    const path = divisionId
        ? `/api/teams?divisionId=${divisionId}`
        : leagueId
        ? `/api/teams?leagueId=${leagueId}`
        : `/api/teams`;
    const data = await fetcher({ method: 'get', path });
    return data;
};

export const requestGetTeam = async (teamId: number): Promise<Team> => {
    return await fetcher({ method: 'get', path: `/api/teams/${teamId}` });
};

export const requestGetGameListByTeam = async (teamId: number): Promise<Game[]> => {
    return await fetcher({ method: 'get', path: `/api/teams/${teamId}/games` });
};

export const requestGetLatestGameListByTeam = async (teamId: number): Promise<Game[]> => {
    return await fetcher({ method: 'get', path: `/api/teams/${teamId}/games/latest` });
};

export const requestGetAtbatListByTeam = async (teamId: number): Promise<AtBat[]> => {
    return await fetcher({ method: 'get', path: `/api/teams/${teamId}/atbats` });
};

export const requestGetLatestAtbatListByTeam = async (teamId: number): Promise<AtBat[]> => {
    return await fetcher({ method: 'get', path: `/api/teams/${teamId}/atbats/latest` });
};

export const requestGetTeamRoster = async (teamId: number, positionType?: PositionType): Promise<Player[]> => {
    const path =
        !positionType || positionType === 'ALL'
            ? `/api/teams/${teamId}/roster`
            : `/api/teams/${teamId}/roster?positionType=${positionType}`;
    console.log(`path, ${path}`);
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
