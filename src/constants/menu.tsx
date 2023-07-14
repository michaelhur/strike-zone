import { DYNAMIC_PATH, PATH } from '@constants/routes';

import { CalendarIcon, HomeIcon, PersonIcon, TeamIcon, UmpireIcon } from '@components/@shared/Icon';
import { CardViewIcon } from '@components/@shared/Icon/CardViewIcon';
import { ListViewIcon } from '@components/@shared/Icon/ListViewIcon';

import { itemViewType } from '@recoils/fixture/atom';

import { TabOptions, ViewTypeOptions } from '@typings/input';
import { LeagueType } from '@typings/league';
import { Menu } from '@typings/menu';

export const menu: Menu[] = [
    {
        name: 'Home',
        path: PATH.HOME,
        iconComponent: <HomeIcon />,
    },
    {
        name: 'Fixture',
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

export const leagueSubMenu = (date?: string): Menu[] => [
    {
        name: 'ALL',
        path: date ? `${DYNAMIC_PATH.FIXTURE_BY_DATE(date)}` : PATH.FIXTURE,
    },
    {
        name: 'American League',
        path: date ? `${DYNAMIC_PATH.FIXTURE_BY_DATE(date)}?leagues=103` : `${PATH.FIXTURE}?leagues=103`,
    },
    {
        name: 'National League',
        path: date ? `${DYNAMIC_PATH.FIXTURE_BY_DATE(date)}?leagues=104` : `${PATH.FIXTURE}?leagues=104`,
    },
];

export const leagueTabOptions: TabOptions<LeagueType>[] = [
    {
        label: 'ALL',
        value: 'ALL',
    },
    {
        label: 'AL',
        value: 103,
    },
    {
        label: 'NL',
        value: 104,
    },
];

export const itemViewTypeOptions: ViewTypeOptions<itemViewType>[] = [
    {
        key: 'CARD',
        value: 'CARD',
        iconComponent: <CardViewIcon />,
    },
    {
        key: 'LIST',
        value: 'LIST',
        iconComponent: <ListViewIcon />,
    },
];
