import { UseQueryOptions, useQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';

import { GetUmpireListRequest } from '@typings/umpire';

import { requestGetUmpireList } from '@src/apis/umpire';

export const useGetUmpireList = (
    page: number,
    name?: string,
    options?: UseQueryOptions<GetUmpireListRequest, AxiosError>,
) => {
    return useQuery<GetUmpireListRequest, AxiosError>(
        ['UMPIRES', { page, name }],
        () => requestGetUmpireList(page, name),
        {
            ...options,
        },
    );
};
