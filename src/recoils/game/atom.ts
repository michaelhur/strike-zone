import { atom } from 'recoil';

import { ZoneViewType } from '@typings/game';

export const zoneViewTypeState = atom<ZoneViewType>({
    key: 'zoneViewTypeState',
    default: 'SUMMARY',
});
