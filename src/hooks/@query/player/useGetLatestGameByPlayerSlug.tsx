import { UseQueryOptions, useQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';

import { Game } from '@typings/game';

import { requestGetLatestGameByPlayerSlug } from '@src/apis/player';

export const useGetLatestGameByPlayerSlug = (
    slug: string,
    isPitcher: boolean,
    options?: UseQueryOptions<Game[], AxiosError>,
) => {
    return useQuery<Game[], AxiosError>(
        ['GAMES', { playerSlug: slug }],
        () => requestGetLatestGameByPlayerSlug(slug, isPitcher!),
        {
            ...options,
            onSuccess: () => {
                console.log('useGetGameByPlayerSlug succeed');
            },
        },
    );
};
