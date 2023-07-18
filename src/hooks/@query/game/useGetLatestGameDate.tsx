import { UseQueryOptions, useQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { useSetRecoilState } from 'recoil';

import { latestGameDateState } from '@recoils/fixture/atom';

import { YYYYMMDD_to_date } from '@utils/date';

import { requestGetLatestGameDate } from '@src/apis/game';
import { dateString } from '@src/typings';

export const useGetLatestGameDate = (options?: UseQueryOptions<dateString, AxiosError>) => {
    const setLatestGameDate = useSetRecoilState(latestGameDateState);

    return useQuery<dateString, AxiosError>(['GAME_DATE', 'latest'], () => requestGetLatestGameDate(), {
        ...options,
        onSuccess: (data) => {
            const dateString = data.date;
            const date = YYYYMMDD_to_date(dateString);
            setLatestGameDate(date);
        },
    });
};
