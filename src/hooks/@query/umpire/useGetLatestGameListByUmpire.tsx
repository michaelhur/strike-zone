import { UseQueryOptions, useQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';

import { Game } from '@typings/game';

import { requestGetLastestGameListByUmpire } from '@src/apis/umpire';

export const useGetLatestGameListByUmpire = (umpireId: number, options?: UseQueryOptions<Game[], AxiosError>) => {
    return useQuery<Game[], AxiosError>(['Games', { umpireId }], () => requestGetLastestGameListByUmpire(umpireId), {
        ...options,
    });
};
