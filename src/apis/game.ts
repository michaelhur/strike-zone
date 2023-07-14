import { DYNAMIC_API_PATH } from '@constants/routes';

import { Game } from '@typings/game';

import { convertSearchParamsToPOSTREST } from '@utils/url';

import { fetcher } from '@src/apis/fetcher';
import { dateString } from '@src/typings';

export const requestGetGameList = async (searchParams?: string): Promise<Array<Game>> => {
    const basePath = DYNAMIC_API_PATH.GAME_LIST();
    const path = searchParams ? `${basePath}${convertSearchParamsToPOSTREST(searchParams)}` : basePath;
    return await fetcher({ method: 'get', path });
};

export const requestGetGame = async (slug: string): Promise<Game> => {
    const path = DYNAMIC_API_PATH.GAME_DETAIL(slug);
    return await fetcher({ method: 'get', path });
};

export const requestGetLatestGameList = async (): Promise<Game[]> => {
    const path = DYNAMIC_API_PATH.GAME_LATEST();
    return await fetcher({ method: 'get', path });
};

export const requestGetLatestGameDate = async (): Promise<dateString> => {
    const path = DYNAMIC_API_PATH.GAME_LATEST();
    const response = await fetcher({ method: 'get', path });
    const { date } = response.data[0];

    return { date };
};
