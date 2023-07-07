import { UseQueryOptions, useQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';

import { Game } from '@typings/game';

import { requestGetGameListByTeam } from '@src/apis/team';

export const useGetGameListByTeam = (teamId: number, options?: UseQueryOptions<Game[], AxiosError>) => {
    return useQuery<Game[], AxiosError>(['Games', { teamId }], () => requestGetGameListByTeam(teamId), {
        ...options,
        enabled: !!teamId,
        onSuccess: () => {
            console.log('useGetGameListByTeam succeed');
        },
    });
};
