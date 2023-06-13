import { CalendarIcon, HomeIcon, PersonIcon, TeamIcon, UmpireIcon } from '@components/@shared/Icon';

import { Menu } from '@typings/menu';

export const sidebarMenu: Menu[] = [
    {
        name: 'Home',
        path: '/',
        iconComponent: <HomeIcon />,
    },
    {
        name: 'Schedule',
        path: '/games',
        iconComponent: <CalendarIcon />,
    },
    {
        name: 'Player',
        path: '/players',
        iconComponent: <PersonIcon />,
    },
    {
        name: 'Team',
        path: '/teams',
        iconComponent: <TeamIcon />,
    },
    {
        name: 'Umpire',
        path: '/umpires',
        iconComponent: <UmpireIcon />,
    },
];
