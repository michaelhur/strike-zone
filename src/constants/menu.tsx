import { PATH } from '@constants/routes';

import { CalendarIcon, HomeIcon, PersonIcon, TeamIcon, UmpireIcon } from '@components/@shared/Icon';

import { Menu } from '@typings/menu';

export const sidebarMenu: Menu[] = [
    {
        name: 'Home',
        path: PATH.MAIN,
        iconComponent: <HomeIcon />,
    },
    {
        name: 'Schedule',
        path: PATH.FIXTURE,
        iconComponent: <CalendarIcon />,
    },
    {
        name: 'Player',
        path: PATH.PLAYER_LIST,
        iconComponent: <PersonIcon />,
    },
    {
        name: 'Team',
        path: PATH.TEAM_LIST,
        iconComponent: <TeamIcon />,
    },
    {
        name: 'Umpire',
        path: PATH.UMPIRE_LIST,
        iconComponent: <UmpireIcon />,
    },
];
