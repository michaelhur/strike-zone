import { UseQueryOptions, useQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';

import { PlayerStats } from '@typings/player';

import { requestGetPlayerStats } from '@src/apis/player';

export const useGetPlayerStats = (slug: string, options?: UseQueryOptions<PlayerStats, AxiosError>) => {
    return useQuery<PlayerStats, AxiosError>(['PLAYER_STAT', { playerSlug: slug }], () => requestGetPlayerStats(slug), {
        ...options,
    });
};
