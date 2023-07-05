import { atBatList } from '@mocks/data/atBat';
import { Meta, Story } from '@storybook/react';

import SummaryPlot from '@components/SummaryPlot/SummaryPlot';

export default {
    title: 'Composition/Zone/SummaryPlot',
    component: SummaryPlot,
} as Meta<typeof SummaryPlot>;

const Template: Story<typeof SummaryPlot> = (args) => {
    return <SummaryPlot {...args} />;
};

const sampleAtbat = atBatList.slice(0, 50);
console.log(sampleAtbat.length);

export const Default = Template.bind({});
Default.args = {
    atbats: sampleAtbat,
    sideType: 'Home',
};
