import { atom } from 'recoil';

export type itemViewType = 'LIST' | 'CARD';

export const itemViewTypeState = atom<itemViewType>({
    key: 'viewTypeState',
    default: 'CARD',
});
