import { UseQueryOptions, useQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';

import { AtBat } from '@typings/atbat';

import { requestGetLatestAtbatListByTeam } from '@src/apis/team';

export const useGetLatestAtbatListByTeam = (teamId: number, options?: UseQueryOptions<AtBat[], AxiosError>) => {
    return useQuery<AtBat[], AxiosError>(
        ['Atbats', { teamId, latest: true }],
        () => requestGetLatestAtbatListByTeam(teamId),
        {
            ...options,
            onSuccess: () => {
                console.log('useGetLatestAtbatListByTeam succeed');
            },
        },
    );
};
