import { DYNAMIC_API_PATH } from '@constants/routes';

import { AtBat } from '@typings/atbat';

import { convertSearchParamsToPOSTREST } from '@utils/url';

import { fetcher } from '@src/apis/fetcher';

export const requestGetAtbatList = async (searchParams?: string): Promise<Array<AtBat>> => {
    const basePath = DYNAMIC_API_PATH.ATBAT_LIST();
    const path = searchParams ? `${basePath}${convertSearchParamsToPOSTREST(searchParams)}` : basePath;
    const response = await fetcher({ method: 'get', path });
    return response!.data;
};

export const requestGetAtbat = async (slug: string): Promise<Array<AtBat>> => {
    const path = DYNAMIC_API_PATH.ATBAT_DETAIL(slug);
    const response = await fetcher({ method: 'get', path });
    return response!.data;
};
