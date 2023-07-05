import { atom } from 'recoil';

import { ModeTheme } from '@typings/theme';

import { getTheme } from '@utils/theme';

export const sidebarCollapseState = atom<boolean>({
    key: 'sideBarState',
    default: true,
});

export const themeState = atom<ModeTheme>({
    key: 'themeState',
    default: getTheme(),
});
