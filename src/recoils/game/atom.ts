import { atom } from 'recoil';

import { GameViewType } from '@typings/game';

export const gameViewTypeState = atom<GameViewType>({
    key: 'gameViewTypeState',
    default: 'SUMMARY',
});
