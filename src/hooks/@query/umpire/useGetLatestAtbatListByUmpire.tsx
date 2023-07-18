import { UseQueryOptions, useQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';

import { AtBat } from '@typings/atbat';

import { requestGetLatestAtbatListByUmpire } from '@src/apis/umpire';

export const useGetLatestAtbatListByUmpire = (umpireId: number, options?: UseQueryOptions<AtBat[], AxiosError>) => {
    return useQuery<AtBat[], AxiosError>(['Atbats', { umpireId }], () => requestGetLatestAtbatListByUmpire(umpireId), {
        ...options,
    });
};
