import { atom } from 'recoil';

import { ModeTheme } from '@typings/theme';

import { getTheme } from '@utils/theme';

export const themeState = atom<ModeTheme>({
    key: 'themeState',
    default: getTheme(),
});
