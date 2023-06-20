import { UseQueryOptions, useQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';

import { Game } from '@typings/game';

import { parseParmsToObject } from '@utils/url';

import { requestGetGameList } from '@src/apis/game';

export const useGetGameList = (searchParams?: string, options?: UseQueryOptions<Array<Game>, AxiosError>) => {
    const searchParamsObject = searchParams ? parseParmsToObject(searchParams) : {};
    return useQuery<Array<Game>, AxiosError>(['GAMES', searchParamsObject], () => requestGetGameList(searchParams), {
        ...options,
        onSuccess: () => {
            console.log('useGetGameList succeed');
        },
    });
};
