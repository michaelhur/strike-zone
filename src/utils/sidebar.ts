import { SidebarStatus } from '@typings/sidebar';

export const getSidebarStatus = (): SidebarStatus => {
    const sidebarStatus = localStorage.getItem('sz-sidebar') as SidebarStatus;
    return JSON.parse(sidebarStatus) || 'opened';
};
