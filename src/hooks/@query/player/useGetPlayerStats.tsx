import { UseQueryOptions, useQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';

import { requestGetPlayerStats } from '@src/apis/player';
import { AnyOBJ } from '@src/typings';

export const useGetPlayerStats = (slug: string, options?: UseQueryOptions<AnyOBJ, AxiosError>) => {
    return useQuery<AnyOBJ, AxiosError>(['PLAYER_STAT', { playerSlug: slug }], () => requestGetPlayerStats(slug), {
        ...options,
        enabled: !!slug,
        onSuccess: () => {
            console.log('useGetPlayerStats succeed');
        },
    });
};
