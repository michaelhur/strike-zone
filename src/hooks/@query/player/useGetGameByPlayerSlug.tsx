import { UseQueryOptions, useQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';

import { Game } from '@typings/game';

import { requestGetGameByPlayerSlug } from '@src/apis/player';

export const useGetGameByPlayerSlug = (
    slug: string,
    isPitcher: boolean,
    options?: UseQueryOptions<Game[], AxiosError>,
) => {
    return useQuery<Game[], AxiosError>(
        ['GAMES', { playerSlug: slug }],
        () => requestGetGameByPlayerSlug(slug, isPitcher),
        {
            ...options,
            onSuccess: () => {
                console.log('useGetGameByPlayerSlug succeed');
            },
        },
    );
};
