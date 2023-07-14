import { UseQueryOptions, useQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';

import { Game } from '@typings/game';

import { requestGetGameByPlayerSlug } from '@src/apis/player';

export const useGetGameByPlayerSlug = (slug: string, options?: UseQueryOptions<Game[], AxiosError>) => {
    return useQuery<Game[], AxiosError>(['GAMES', { playerSlug: slug }], () => requestGetGameByPlayerSlug(slug), {
        ...options,
        enabled: !!slug,
        onSuccess: () => {
            console.log('useGetGameByPlayerSlug succeed');
        },
    });
};
