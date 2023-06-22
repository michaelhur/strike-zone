import { Game } from '@typings/game';

import { fetcher } from '@src/apis/fetcher';
import { dateString } from '@src/typings';

export const requestGetGameList = async (searchParams?: string): Promise<Array<Game>> => {
    const path = searchParams ? `/api/games?${searchParams}` : `/api/games`;
    const data = await fetcher({ method: 'get', path });
    return data;
};

export const requestGetGame = async (slug: string): Promise<Game> => {
    const data = await fetcher({ method: 'get', path: `/api/games/${slug}` });
    return data;
};

export const requestGetGameByPlayerId = async (id: number): Promise<Game[]> => {
    const data = await fetcher({ method: 'get', path: `/api/games/get-by-playerId/${id}` });
    return data;
};

export const requestGetGameByPlayerSlug = async (slug: string, page: number): Promise<Game[]> => {
    const path = `/api/games/get-by-playerSlug/${slug}?page=${page}`;
    const range = `${(page - 1) * 10}-${page * 10 - 1}`;
    const data = await fetcher({ method: 'get', path, headers: { Range: range } });
    return data;
};

export const requestGetGameById = async (id: number): Promise<Game> => {
    const data = await fetcher({ method: 'get', path: `/api/games/get-by-id/${id}` });
    return data;
};

export const requestGetLatestGameList = async (): Promise<Game[]> => {
    const data = await fetcher({ method: 'get', path: '/api/games/@latest' });
    return data;
};

export const requestGetLatestGameDate = async (): Promise<dateString> => {
    const data = await fetcher({ method: 'get', path: '/api/games/@latest-date' });
    return data;
};
