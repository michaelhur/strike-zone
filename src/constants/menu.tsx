import { DYNAMIC_PATH, PATH } from '@constants/routes';

import { CalendarIcon, HomeIcon, PersonIcon, TeamIcon, UmpireIcon } from '@components/@shared/Icon';
import { CardViewIcon } from '@components/@shared/Icon/CardViewIcon';
import { ListViewIcon } from '@components/@shared/Icon/ListViewIcon';

import { itemViewType } from '@recoils/fixture/atom';

import { TabOptions, ViewTypeOptions } from '@typings/input';
import { LeagueType } from '@typings/league';
import { Menu } from '@typings/menu';

export const sidebarMenu: Menu[] = [
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

export const LeagueSubMenu = (date?: string): Menu[] => [
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

export const LeagueTabOptions: TabOptions<LeagueType>[] = [
    {
        label: 'ALL',
        value: 'ALL',
    },
    {
        label: 'American League',
        value: 103,
    },
    {
        label: 'National League',
        value: 104,
    },
];

export const ItemViewTypeOptions = (selected: itemViewType): ViewTypeOptions<itemViewType>[] => [
    {
        key: 'CARD',
        value: 'CARD',
        iconComponent: <CardViewIcon color={selected === 'CARD' ? 'var(--primary500)' : 'var(--grey1000)'} />,
    },
    {
        key: 'LIST',
        value: 'LIST',
        iconComponent: <ListViewIcon color={selected === 'LIST' ? 'var(--primary500)' : 'var(--grey1000)'} />,
    },
];
