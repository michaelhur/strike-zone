import { UseQueryOptions, useQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';

import { AtBat } from '@typings/atbat';

import { requestGetLatestAtbatsByPlayerSlug } from '@src/apis/player';

export const useGetLatestAtbatsByPlayerSlug = (
    slug: string,
    isPitcher: boolean,
    options?: UseQueryOptions<AtBat[], AxiosError>,
) => {
    return useQuery<AtBat[], AxiosError>(
        ['ATBATS', { playerSlug: slug, latest: true }],
        () => requestGetLatestAtbatsByPlayerSlug(slug, isPitcher),
        {
            ...options,
            onSuccess: () => {
                console.log('useGetLatestAtbatsByPlayerSlug succeed');
            },
        },
    );
};
