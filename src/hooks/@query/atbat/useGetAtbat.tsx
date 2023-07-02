import { UseQueryOptions, useQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';

import { AtBat } from '@typings/atbat';

import { requestGetAtbat } from '@src/apis/atbat';

export const useGetAtbat = (slug: string, options?: UseQueryOptions<Array<AtBat>, AxiosError>) => {
    return useQuery<Array<AtBat>, AxiosError>(['ATBATS', { slug }], () => requestGetAtbat(slug), {
        ...options,
        enabled: !!slug,
        onSuccess: () => {
            console.log('useGetAtbat succeed');
        },
    });
};
