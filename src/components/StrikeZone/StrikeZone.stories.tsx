import { atBatList } from '@mocks/data/atBat';
import { Meta, Story } from '@storybook/react';

import StrikeZone from '@components/StrikeZone/StrikeZone';

import { AtBat } from '@typings/atbat';

export default {
    title: 'Components/StrikeZone',
    components: StrikeZone,
} as Meta<typeof StrikeZone>;

const Template: Story<typeof StrikeZone> = (args) => {
    return <StrikeZone {...args} />;
};
const sampleAtbats: AtBat[] = atBatList.splice(0, 20);
const strikesAtbats: AtBat[] = atBatList.filter((atbat) => atbat.plays.filter((play) => play.isStrike));

export const Default = Template.bind({});
Default.args = {
    atbats: sampleAtbats,
    height: 400,
    width: 300,
};

export const HeatMap = Template.bind({});
HeatMap.args = {
    atbats: strikesAtbats,
    height: 400,
    width: 300,
};
