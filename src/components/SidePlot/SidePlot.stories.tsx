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

export const Default = Template.bind({});
Default.args = {
    atbats: sampleAtbat,
    outcomeType: 'CalledStrike',
};
