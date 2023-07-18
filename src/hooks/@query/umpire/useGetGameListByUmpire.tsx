import { UseQueryOptions, useQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';

import { Game } from '@typings/game';

import { requestGetGameListByUmpire } from '@src/apis/umpire';

export const useGetGameListByUmpire = (umpireId: number, options?: UseQueryOptions<Game[], AxiosError>) => {
    return useQuery<Game[], AxiosError>(['Games', { umpireId }], () => requestGetGameListByUmpire(umpireId), {
        ...options,
    });
};
