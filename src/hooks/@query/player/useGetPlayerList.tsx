import { UseQueryOptions, useQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';

import { PositionType } from '@typings/player';

import { parseParmsToObject } from '@utils/url';

import { GetPlayerListRequest, requestGetPlayerList } from '@src/apis/player';

export const useGetPlayerList = (
    page: number,
    lastName: string,
    positionType: PositionType,
    searchParams?: string,
    options?: UseQueryOptions<GetPlayerListRequest, AxiosError>,
) => {
    const searchParamsObject = searchParams ? parseParmsToObject(searchParams) : {};
    return useQuery<GetPlayerListRequest, AxiosError>(
        ['PLAYERS', { ...searchParamsObject, lastName, positionType, page }],
        () => requestGetPlayerList(page, lastName, positionType, searchParams),
        {
            ...options,
        },
    );
};
