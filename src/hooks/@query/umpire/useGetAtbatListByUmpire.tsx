import { UseQueryOptions, useQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';

import { AtBat } from '@typings/atbat';

import { requestGetAtbatListByUmpire } from '@src/apis/umpire';

export const useGetAtbatListByUmpire = (umpireId: number, options?: UseQueryOptions<AtBat[], AxiosError>) => {
    return useQuery<AtBat[], AxiosError>(['Atbats', { umpireId }], () => requestGetAtbatListByUmpire(umpireId), {
        ...options,
    });
};
