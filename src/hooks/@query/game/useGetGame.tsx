import { UseQueryOptions, useQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';

import { Game } from '@typings/game';

import { requestGetGame } from '@src/apis/game';

export const useGetGame = (slug: string, options?: UseQueryOptions<Game, AxiosError>) => {
    return useQuery<Game, AxiosError>(['GAME', { slug }], () => requestGetGame(slug), {
        ...options,
    });
};
