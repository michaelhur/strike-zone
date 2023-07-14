import { DYNAMIC_API_PATH } from '@constants/routes';

import { Game } from '@typings/game';

import { getTodayStr } from '@utils/date';
import { convertSearchParamsToPOSTREST } from '@utils/url';

import { fetcher } from '@src/apis/fetcher';
import { dateString } from '@src/typings';

export const requestGetGameList = async (fixtureDate: string, searchParams?: string): Promise<Array<Game>> => {
    const basePath = DYNAMIC_API_PATH.GAME_LIST(fixtureDate);
    const path = searchParams ? `${basePath}${convertSearchParamsToPOSTREST(searchParams)}` : basePath;
    const response = await fetcher({ method: 'get', path });
    return response!.data;
};

export const requestGetGame = async (slug: string): Promise<Game> => {
    const path = DYNAMIC_API_PATH.GAME_DETAIL(slug);
    const response = await fetcher({ method: 'get', path });
    const data = response!.data;
    return data[0];
};

export const requestGetLatestGameList = async (): Promise<Game[]> => {
    const path = DYNAMIC_API_PATH.GAME_LATEST();
    const response = await fetcher({ method: 'get', path });
    return response!.data;
};

export const requestGetLatestGameDate = async (): Promise<dateString> => {
    const path = DYNAMIC_API_PATH.GAME_LATEST();
    const response = await fetcher({ method: 'get', path });
    const data = response!.data;
    const date = data[0].date || getTodayStr();
    return { date };
};
