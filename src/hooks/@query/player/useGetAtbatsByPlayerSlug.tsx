import { UseQueryOptions, useQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';

import { AtBat } from '@typings/atbat';

import { requestGetAtbatsByPlayerSlug } from '@src/apis/player';

export const useGetAtbatsByPlayerSlug = (slug: string, options?: UseQueryOptions<AtBat[], AxiosError>) => {
    return useQuery<AtBat[], AxiosError>(['ATBATS', { playerSlug: slug }], () => requestGetAtbatsByPlayerSlug(slug), {
        ...options,
        enabled: !!slug,
        onSuccess: () => {
            console.log('useGetAtbatsByPlayerSlug succeed');
        },
    });
};
