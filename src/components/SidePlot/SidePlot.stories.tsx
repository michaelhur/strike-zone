import { atBatList } from '@mocks/data/atBat';
import { Meta, Story } from '@storybook/react';

import SidePlot from '@components/SidePlot/SidePlot';

export default {
    title: 'Composition/Zone/SidePlot',
    component: SidePlot,
} as Meta<typeof SidePlot>;

const Template: Story<typeof SidePlot> = (args) => {
    return <SidePlot {...args} />;
};

const sampleAtbat = atBatList;

export const Zone = Template.bind({});
Zone.args = {
    atbats: sampleAtbat,
    outcomeType: 'CalledStrike',
    latest: true,
};

export const Heatmap = Template.bind({});
Heatmap.args = {
    atbats: sampleAtbat,
    outcomeType: 'CalledStrike',
    latest: false,
};
