import { DYNAMIC_API_PATH } from '@constants/routes';

import { Game } from '@typings/game';

import { getTodayStr } from '@utils/date';
import { convertSearchParamsToPOSTREST } from '@utils/url';

import { fetcher } from '@src/apis/fetcher';
import { dateString } from '@src/typings';

export const requestGetGameList = async (fixtureDate: string, searchParams?: string): Promise<Array<Game>> => {
    const basePath = DYNAMIC_API_PATH.GAME_LIST(fixtureDate);
    const path = searchParams ? `${basePath}${convertSearchParamsToPOSTREST(searchParams)}` : basePath;
    return await fetcher({ method: 'get', path });
};

export const requestGetGame = async (slug: string): Promise<Game> => {
    const path = DYNAMIC_API_PATH.GAME_DETAIL(slug);
    const data = await fetcher({ method: 'get', path });
    return data[0];
};

export const requestGetLatestGameList = async (): Promise<Game[]> => {
    const path = DYNAMIC_API_PATH.GAME_LATEST();
    return await fetcher({ method: 'get', path });
};

export const requestGetLatestGameDate = async (): Promise<dateString> => {
    const path = DYNAMIC_API_PATH.GAME_LATEST();
    const data = await fetcher({ method: 'get', path });
    const date = data[0].date || getTodayStr();
    return { date };
};
