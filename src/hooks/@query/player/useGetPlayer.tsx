import { UseQueryOptions, useQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';

import { Player } from '@typings/player';

import { requestGetPlayer } from '@src/apis/player';

export const useGetPlayer = (slug: string, options?: UseQueryOptions<Player, AxiosError>) => {
    return useQuery<Player, AxiosError>(['PLAYER', { slug }], () => requestGetPlayer(slug), {
        ...options,
        enabled: !!slug,
        onSuccess: () => {
            console.log('useGetGame succeed');
        },
    });
};
