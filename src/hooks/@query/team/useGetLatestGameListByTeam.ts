import { UseQueryOptions, useQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';

import { Game } from '@typings/game';

import { requestGetLatestGameListByTeam } from '@src/apis/team';

export const useGetLatestGameListByTeam = (teamId: number, options?: UseQueryOptions<Game[], AxiosError>) => {
    return useQuery<Game[], AxiosError>(
        ['Games', { teamId, latest: true }],
        () => requestGetLatestGameListByTeam(teamId),
        {
            ...options,
            onSuccess: () => {
                console.log('requestGetLatestGameListByTeam succeed');
            },
        },
    );
};
