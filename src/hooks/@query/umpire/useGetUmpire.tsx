import { UseQueryOptions, useQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';

import { Umpire } from '@typings/umpire';

import { requestGetUmpire } from '@src/apis/umpire';

export const useGetUmpire = (umpireId: number, options?: UseQueryOptions<Umpire, AxiosError>) => {
    return useQuery<Umpire, AxiosError>(['UMPIRES', { umpireId }], () => requestGetUmpire(umpireId), {
        ...options,
        onSuccess: () => {
            console.log('useGetUmpire Succeed');
        },
    });
};
