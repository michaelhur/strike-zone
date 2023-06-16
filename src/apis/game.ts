import { Game } from '@typings/game';

import { fetcher } from '@src/apis/fetcher';

export const requestGetGameList = async (searchParams?: string): Promise<Array<Game>> => {
    const path = searchParams ? `/api/games?${searchParams}` : `/api/games`;
    const data = await fetcher({ method: 'get', path });
    return data;
};

export const requestGetGame = async (slug: string): Promise<Game> => {
    const data = await fetcher({ method: 'get', path: `/api/games/${slug}` });
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
