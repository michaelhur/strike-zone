import { TabOptions } from '@typings/input';
import { PositionType } from '@typings/player';

export const positionTypeTabOptions: TabOptions<PositionType>[] = [
    {
        label: 'ALL',
        value: 'ALL',
    },
    {
        label: 'Pitcher',
        value: 'Pitcher',
    },
    {
        label: 'Infielder',
        value: 'Infielder',
    },
    {
        label: 'Outfielder',
        value: 'Outfielder',
    },
    {
        label: 'DH',
        value: 'Hitter',
    },
    {
        label: 'TWP',
        value: 'Two-Way Player',
    },
];
