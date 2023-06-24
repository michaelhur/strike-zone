import { UseQueryOptions, useQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';

import { Game } from '@typings/game';

import { requestGetGameByPlayerSlug } from '@src/apis/game';

export const useGetGameByPlayerSlug = (slug: string, page?: number, options?: UseQueryOptions<Game[], AxiosError>) => {
    return useQuery<Game[], AxiosError>(
        ['GAME', { playerSlug: slug, page: page || 'all' }],
        () => requestGetGameByPlayerSlug(slug, page),
        {
            ...options,
            enabled: !!slug,
            onSuccess: () => {
                console.log('useGetGameByPlayerSlug succeed');
            },
        },
    );
};
