import { UseQueryOptions, useQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';

import { Team } from '@typings/team';

import { requestGetTeamList } from '@src/apis/team';

export const useGetTeamList = (
    leagueId?: number,
    divisionId?: number,
    options?: UseQueryOptions<Team[], AxiosError>,
) => {
    const queryKey = !leagueId && !divisionId ? ['Teams'] : ['Teams', { leagueId, divisionId }];
    return useQuery<Team[], AxiosError>(queryKey, () => requestGetTeamList(leagueId, divisionId), {
        ...options,
    });
};
