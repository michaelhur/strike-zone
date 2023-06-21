import { UseQueryOptions, useQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';

import { Player } from '@typings/player';

import { parseParmsToObject } from '@utils/url';

import { GetPlayerListRequest, requestGetPlayerList } from '@src/apis/player';

export const useGetPlayerList = (
    page: number,
    searchParams?: string,
    options?: UseQueryOptions<GetPlayerListRequest, AxiosError>,
) => {
    const searchParamsObject = searchParams ? parseParmsToObject(searchParams) : {};
    return useQuery<GetPlayerListRequest, AxiosError>(
        ['PLAYERS', { ...searchParamsObject, page }],
        () => requestGetPlayerList(page, searchParams),
        {
            ...options,
            onSuccess: () => {
                console.log('useGetGameList succeed');
            },
        },
    );
};
