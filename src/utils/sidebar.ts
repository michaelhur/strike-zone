import {SidebarStatus} from '@typings/sidebar';

export const getSidebarStatus = (): SidebarStatus => {
    const sidebarStatus = <SidebarStatus>localStorage.getItem('sz-sidebar');
    return JSON.parse(sidebarStatus) || 'opened';
};
