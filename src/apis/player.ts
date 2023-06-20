import { Player } from '@typings/player';

import { fetcher } from '@src/apis/fetcher';

export const requestGetPlayerList = async (searchParams?: string): Promise<Array<Player>> => {
    const path = searchParams ? `/api/players?${searchParams}` : `/api/players`;
    const data = await fetcher({ method: 'get', path });
    return data;
};

export const requestGetPlayer = async (id: number): Promise<Player> => {
    const data = await fetcher({ method: 'get', path: `/api/players/${id}` });
    return data;
};
