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
const sampleAtbats: AtBat[] = atBatList.splice(0, 1);

export const Default = Template.bind({});
Default.args = {
    height: 400,
    width: 300,
    atbats: sampleAtbats,
};
