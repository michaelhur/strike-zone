import { UseQueryOptions, useQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';

import { Game } from '@typings/game';
import { PositionType } from '@typings/player';

import { requestGetGameByPlayerSlug } from '@src/apis/player';

export const useGetGameByPlayerSlug = (
    slug: string,
    positionType: PositionType,
    options?: UseQueryOptions<Game[], AxiosError>,
) => {
    return useQuery<Game[], AxiosError>(
        ['GAMES', { playerSlug: slug }],
        () => requestGetGameByPlayerSlug(slug, positionType),
        {
            ...options,
        },
    );
};
