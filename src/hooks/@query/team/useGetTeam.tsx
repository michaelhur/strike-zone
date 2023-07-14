import { UseQueryOptions, useQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';

import { Team } from '@typings/team';

import { requestGetTeam } from '@src/apis/team';

export const useGetTeam = (teamId: number, options?: UseQueryOptions<Team, AxiosError>) => {
    return useQuery<Team, AxiosError>(['Teams', { teamId }], () => requestGetTeam(teamId), {
        ...options,
        onSuccess: (data) => {
            console.log('useGetTeam succeed');
        },
    });
};
