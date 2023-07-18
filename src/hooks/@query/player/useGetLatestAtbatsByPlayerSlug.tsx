import { UseQueryOptions, useQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';

import { AtBat } from '@typings/atbat';
import { PositionType } from '@typings/player';

import { requestGetLatestAtbatsByPlayerSlug } from '@src/apis/player';

export const useGetLatestAtbatsByPlayerSlug = (
    slug: string,
    positionType: PositionType,
    options?: UseQueryOptions<AtBat[], AxiosError>,
) => {
    return useQuery<AtBat[], AxiosError>(
        ['ATBATS', { playerSlug: slug, latest: true }],
        () => requestGetLatestAtbatsByPlayerSlug(slug, positionType),
        {
            ...options,
        },
    );
};
