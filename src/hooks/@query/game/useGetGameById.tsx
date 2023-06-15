import { UseQueryOptions, useQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';

import { Game } from '@typings/game';

import { requestGetGameById } from '@src/apis/game';

export const useGetGameById = (id: number, options?: UseQueryOptions<Game, AxiosError>) => {
    return useQuery<Game, AxiosError>(['GAME', { id }], () => requestGetGameById(id), {
        ...options,
        // Update ['GAME', { slug }] as well
        onSuccess: () => {
            console.log('useGetGameById succeed');
        },
    });
};
