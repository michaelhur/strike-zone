import { atBatList } from '@mocks/data/atBat';
import { Meta, Story } from '@storybook/react';

import StrikeZone from '@components/StrikeZone/StrikeZone';

import { Play } from '@typings/atbat';

export default {
    title: 'Components/StrikeZone',
    components: StrikeZone,
} as Meta<typeof StrikeZone>;

const Template: Story<typeof StrikeZone> = (args) => {
    return <StrikeZone {...args} />;
};
const samplePlays: Play[] = atBatList.splice(0, 20).flatMap((atbat) => atbat.plays);

export const Default = Template.bind({});
Default.args = {
    height: 400,
    width: 300,
    plays: samplePlays,
};
