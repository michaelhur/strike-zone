import { UseQueryOptions, useQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';

import { Player, PositionType } from '@typings/player';

import { requestGetTeamRoster } from '@src/apis/team';

export const useGetTeamRoster = (
    teamId: number,
    positionType?: PositionType,
    options?: UseQueryOptions<Player[], AxiosError>,
) => {
    return useQuery<Player[], AxiosError>(['PLAYERS', { teamId, positionType }], () => requestGetTeamRoster(teamId), {
        ...options,
    });
};
