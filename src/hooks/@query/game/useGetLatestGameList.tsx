import { UseQueryOptions, useQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';

import { Game } from '@typings/game';

import { parseParmsToObject } from '@utils/url';

import { requestGetGameList, requestGetLatestGameList } from '@src/apis/game';
import { getClient } from '@src/queryClient';

export const useGetLatestGameList = (options?: UseQueryOptions<Array<Game>, AxiosError>) => {
    const queryClient = getClient();

    return useQuery<Array<Game>, AxiosError>(['GAMES', { date: 'latest' }], () => requestGetLatestGameList(), {
        ...options,
        onSuccess: (data) => {
            const date = data[0].date;
            queryClient.setQueryData(['GAMES', { date }], data);
            console.log('useGetGameList succeed');
        },
    });
};
