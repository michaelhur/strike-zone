import { UseQueryOptions, useQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';

import { Game } from '@typings/game';
import { LeagueType } from '@typings/league';

import { requestGetGameList } from '@src/apis/game';

export const useGetGameList = (
    fixtureDate: string,
    leagueFilter?: LeagueType,
    searchParams?: string,
    options?: UseQueryOptions<Array<Game>, AxiosError>,
) => {
    return useQuery<Array<Game>, AxiosError>(
        ['GAMES', { fixtureDate, leagueFilter }],
        () => requestGetGameList(fixtureDate, searchParams),
        {
            ...options,
            select: (games) => {
                if (leagueFilter && leagueFilter !== 'ALL')
                    return games.filter(
                        (game) => game.home!.leagueId === leagueFilter || game.away!.leagueId === leagueFilter,
                    );
                return games;
            },
        },
    );
};
