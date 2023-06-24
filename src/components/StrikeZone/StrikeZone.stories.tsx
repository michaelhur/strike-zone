import { atBatList } from '@mocks/data/atBat';
import { Meta, Story } from '@storybook/react';

import StrikeZone from '@components/StrikeZone/StrikeZone';

export default {
    title: 'Components/StrikeZone',
    components: StrikeZone,
} as Meta<typeof StrikeZone>;

const Template: Story<typeof StrikeZone> = (args) => {
    return <StrikeZone {...args} />;
};

const sampleAtbat = atBatList[0];
const coordinates = sampleAtbat.plays.map((play) => play.coordinates);

export const Default = Template.bind({});
Default.args = {
    coordinates: coordinates,
};
