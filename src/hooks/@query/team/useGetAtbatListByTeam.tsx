import { UseQueryOptions, useQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';

import { AtBat } from '@typings/atbat';

import { requestGetAtbatListByTeam } from '@src/apis/team';

export const useGetAtbatListByTeam = (teamId: number, options?: UseQueryOptions<AtBat[], AxiosError>) => {
    return useQuery<AtBat[], AxiosError>(['Atbats', { teamId }], () => requestGetAtbatListByTeam(teamId), {
        ...options,
    });
};
