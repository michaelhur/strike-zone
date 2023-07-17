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
        name: '홈',
        path: PATH.HOME,
        iconComponent: <HomeIcon />,
    },
    {
        name: '일정',
        path: PATH.FIXTURE,
        iconComponent: <CalendarIcon />,
    },
    {
        name: '선수',
        path: PATH.PLAYER_LIST,
        iconComponent: <PersonIcon />,
    },
    {
        name: '팀',
        path: PATH.TEAM_LIST,
        iconComponent: <TeamIcon />,
    },
    {
        name: '심판',
        path: PATH.UMPIRE_LIST,
        iconComponent: <UmpireIcon />,
    },
];

export const leagueSubMenu = (date?: string): Menu[] => [
    {
        name: '전체',
        path: date ? `${DYNAMIC_PATH.FIXTURE_BY_DATE(date)}` : PATH.FIXTURE,
    },
    {
        name: '아메리칸 리그',
        path: date ? `${DYNAMIC_PATH.FIXTURE_BY_DATE(date)}?leagues=103` : `${PATH.FIXTURE}?leagues=103`,
    },
    {
        name: '네셔널 리그',
        path: date ? `${DYNAMIC_PATH.FIXTURE_BY_DATE(date)}?leagues=104` : `${PATH.FIXTURE}?leagues=104`,
    },
];

export const leagueTabOptions: TabOptions<LeagueType>[] = [
    {
        label: '전체',
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
