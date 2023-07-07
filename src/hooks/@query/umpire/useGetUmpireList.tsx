import { UseQueryOptions, useQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';

import { Umpire } from '@typings/umpire';

import { requestGetUmpireList } from '@src/apis/umpire';

export const useGetUmpireList = (page: number, name?: string, options?: UseQueryOptions<Umpire[], AxiosError>) => {
    return useQuery<Umpire[], AxiosError>(['UMPIRES', { page, name }], () => requestGetUmpireList(page, name), {
        ...options,
        onSuccess: () => {
            console.log('useGetUmpireList succeed');
        },
    });
};
