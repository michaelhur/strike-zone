import { atBatList } from '@mocks/data/atBat';
import { Meta, Story } from '@storybook/react';

import { PlayerZoneType } from '@pages/PlayerDetailPage/components/PlayerZoneType/PlayerZoneType';

export default {
    title: 'Composition/Zone/PlayerZoneType',
    component: PlayerZoneType,
} as Meta<typeof PlayerZoneType>;

const Template: Story<typeof PlayerZoneType> = (args) => {
    return <PlayerZoneType {...args} />;
};

const sampleAtbat = atBatList.slice(0, 50);
console.log(sampleAtbat.length);

export const Pitcher = Template.bind({});
Pitcher.args = {
    atbats: sampleAtbat,
    positionType: 'Pitcher',
};

export const Batter = Template.bind({});
Batter.args = {
    atbats: sampleAtbat,
    positionType: 'Catcher',
};
