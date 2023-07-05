import { AtBat } from '@typings/atbat';

import { fetcher } from '@src/apis/fetcher';

export const requestGetAtbatList = async (searchParams?: string): Promise<Array<AtBat>> => {
    const path = searchParams ? `/api/atbats?${searchParams}` : `/api/atbats`;
    return await fetcher({ method: 'get', path });
};

export const requestGetAtbat = async (slug: string): Promise<Array<AtBat>> => {
    return await fetcher({ method: 'get', path: `/api/atbats/${slug}` });
};
