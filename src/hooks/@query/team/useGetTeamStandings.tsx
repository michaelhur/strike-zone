import { UseQueryOptions, useQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';

import { TeamStanding } from '@typings/team';

import { requestGetTeamStandings } from '@src/apis/team';

export const useGetTeamStandings = (
    teamId?: number,
    leagueId?: number,
    divisionId?: number,
    options?: UseQueryOptions<TeamStanding[], AxiosError>,
) => {
    return useQuery<TeamStanding[], AxiosError>(
        ['STANDINGS', { teamId, leagueId, divisionId }],
        () => requestGetTeamStandings(teamId, leagueId, divisionId),
        {
            ...options,
            onSuccess: () => {
                console.log('useGetTeamStandings succeed');
            },
        },
    );
};
