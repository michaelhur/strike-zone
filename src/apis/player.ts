import { Player } from '@typings/player';

import { fetcher } from '@src/apis/fetcher';

export const requestGetPlayerList = async (page: number, searchParams?: string): Promise<Array<Player>> => {
    const range = `${(page - 1) * 10}-${page * 10 - 1}`;
    const path = searchParams ? `/api/players?page=${page}&${searchParams}` : `/api/players?page=${page}`;
    const data = await fetcher({ method: 'get', path, headers: { Range: range } });
    return data;
};

export const requestGetPlayer = async (id: number): Promise<Player> => {
    const data = await fetcher({ method: 'get', path: `/api/players/${id}` });
    return data;
};
