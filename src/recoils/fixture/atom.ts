import { atom } from 'recoil';

import { getYesterday } from '@utils/date';

export type itemViewType = 'LIST' | 'CARD';

export const itemViewTypeState = atom<itemViewType>({
    key: 'viewTypeState',
    default: 'CARD',
});

export const fixtureDateState = atom<Date | undefined>({
    key: 'fixtureDateState',
    default: getYesterday(),
});