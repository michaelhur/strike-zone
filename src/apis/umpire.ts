import { AtBat } from '@typings/atbat';
import { Game } from '@typings/game';
import { GetUmpireListRequest, Umpire } from '@typings/umpire';

import { fetcher } from '@src/apis/fetcher';

export const requestGetUmpireList = async (page: number, name?: string): Promise<GetUmpireListRequest> => {
    const range = `${(page - 1) * 10}-${page * 10 - 1}`;
    const path = name ? `/api/umpires?page=${page}&name=${name}` : `/api/umpires?page=${page}`;
    const data = await fetcher({ method: 'get', path, headers: { Range: range } });
    return data;
};

export const requestGetUmpire = async (umpireId: number): Promise<Umpire> => {
    return await fetcher({ method: 'get', path: `/api/umpires/${umpireId}` });
};

export const requestGetGameListByUmpire = async (umpireId: number): Promise<Game[]> => {
    return await fetcher({ method: 'get', path: `/api/umpires/${umpireId}/games` });
};

export const requestGetLastestGameListByUmpire = async (umpireId: number): Promise<Game[]> => {
    return await fetcher({ method: 'get', path: `/api/umpires/${umpireId}/games/latest` });
};

export const requestGetAtbatListByUmpire = async (umpireId: number): Promise<AtBat[]> => {
    return await fetcher({ method: 'get', path: `/api/umpires/${umpireId}/atbats` });
};

export const requestGetLatestAtbatListByUmpire = async (umpireId: number): Promise<AtBat[]> => {
    return await fetcher({ method: 'get', path: `/api/umpires/${umpireId}/atbats/latest` });
};
