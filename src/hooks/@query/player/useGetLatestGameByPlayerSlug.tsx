import { UseQueryOptions, useQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';

import { Game } from '@typings/game';
import { PositionType } from '@typings/player';

import { requestGetLatestGameByPlayerSlug } from '@src/apis/player';

export const useGetLatestGameByPlayerSlug = (
    slug: string,
    positionType: PositionType,
    options?: UseQueryOptions<Game[], AxiosError>,
) => {
    return useQuery<Game[], AxiosError>(
        ['GAMES', { playerSlug: slug }],
        () => requestGetLatestGameByPlayerSlug(slug, positionType),
        {
            ...options,
        },
    );
};
