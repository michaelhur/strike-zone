import { UseQueryOptions, useQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';

import { Game } from '@typings/game';

import { requestGetGameByPlayerId } from '@src/apis/game';

export const useGetGameByPlayerId = (id: number, options?: UseQueryOptions<Game[], AxiosError>) => {
    return useQuery<Game[], AxiosError>(['GAME', { playerId: id }], () => requestGetGameByPlayerId(id), {
        ...options,
        // Update ['GAME', { slug }] as well
        onSuccess: () => {
            console.log('useGetGameByPlayerId succeed');
        },
    });
};
