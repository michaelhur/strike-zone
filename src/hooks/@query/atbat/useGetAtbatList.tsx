import { UseQueryOptions, useQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';

import { AtBat } from '@typings/atbat';

import { parseParmsToObject } from '@utils/url';

import { requestGetAtbatList } from '@src/apis/atbat';

export const useGetAtbatList = (searchParams?: string, options?: UseQueryOptions<Array<AtBat>, AxiosError>) => {
    const searchParamsObject = searchParams ? parseParmsToObject(searchParams) : {};
    return useQuery<Array<AtBat>, AxiosError>(
        ['Atbats', { ...searchParamsObject }],
        () => requestGetAtbatList(searchParams),
        {
            ...options,
            onSuccess: () => console.log('useGetAtBatList'),
        },
    );
};
