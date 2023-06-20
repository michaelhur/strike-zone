import { UseQueryOptions, useQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';

import { Player } from '@typings/player';

import { requestGetPlayer } from '@src/apis/player';

export const useGetPlayer = (id: number, options?: UseQueryOptions<Player, AxiosError>) => {
    return useQuery<Player, AxiosError>(['PLAYER', { id }], () => requestGetPlayer(id), {
        ...options,
        onSuccess: () => {
            console.log('useGetGame succeed');
        },
    });
};
