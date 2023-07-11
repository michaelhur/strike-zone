import { atom } from 'recoil';

import { SidebarStatus } from '@typings/sidebar';
import { ModeTheme } from '@typings/theme';

import { getSidebarStatus } from '@utils/sidebar';
import { getTheme } from '@utils/theme';

export const sidebarCollapseState = atom<SidebarStatus>({
    key: 'sideBarState',
    default: getSidebarStatus(),
});

export const themeState = atom<ModeTheme>({
    key: 'themeState',
    default: getTheme(),
});
