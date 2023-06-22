import { UseQueryOptions, useQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';

import { Game } from '@typings/game';

import { requestGetGameByPlayerSlug } from '@src/apis/game';

export const useGetGameByPlayerSlug = (slug: string, options?: UseQueryOptions<Game[], AxiosError>) => {
    return useQuery<Game[], AxiosError>(['GAME', { playerSlug: slug }], () => requestGetGameByPlayerSlug(slug), {
        ...options,
        // Update ['GAME', { slug }] as well
        enabled: !!slug,
        onSuccess: () => {
            console.log('useGetGameByPlayerSlug succeed');
        },
    });
};
