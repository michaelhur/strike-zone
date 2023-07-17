import { TabOptions } from '@typings/input';
import { PositionType } from '@typings/player';

export const positionTypeTabOptions: TabOptions<PositionType>[] = [
    {
        label: '전체',
        value: 'ALL',
    },
    {
        label: '투수',
        value: 'Pitcher',
    },
    {
        label: '포수',
        value: 'Catcher',
    },
    {
        label: '내야수',
        value: 'Infielder',
    },
    {
        label: '외야수',
        value: 'Outfielder',
    },
    {
        label: '지명타자',
        value: 'Hitter',
    },
    {
        label: '오타니',
        value: 'Two-Way Player',
    },
];
