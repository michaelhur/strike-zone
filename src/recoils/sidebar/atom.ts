import { atom } from 'recoil';

export const sidebarCollapseState = atom<boolean>({
    key: 'sideBarState',
    default: true,
});
