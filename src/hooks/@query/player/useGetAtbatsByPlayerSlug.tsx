import { UseQueryOptions, useQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';

import { AtBat } from '@typings/atbat';
import { PositionType } from '@typings/player';

import { requestGetAtbatsByPlayerSlug } from '@src/apis/player';

export const useGetAtbatsByPlayerSlug = (
    slug: string,
    positionType: PositionType,
    options?: UseQueryOptions<AtBat[], AxiosError>,
) => {
    return useQuery<AtBat[], AxiosError>(
        ['ATBATS', { playerSlug: slug }],
        () => requestGetAtbatsByPlayerSlug(slug, positionType),
        {
            ...options,
            onSuccess: () => {
                console.log('useGetAtbatsByPlayerSlug succeed');
            },
        },
    );
};
