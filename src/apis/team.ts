import { AtBat } from '@typings/atbat';
import { Game } from '@typings/game';
import { Team } from '@typings/team';

import { fetcher } from '@src/apis/fetcher';

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
