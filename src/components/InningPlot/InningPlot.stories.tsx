import { atBatList } from '@mocks/data/atBat';
import { Meta, Story } from '@storybook/react';

import InningPlot from '@components/InningPlot/InningPlot';

export default {
    title: 'Composition/Zone/InningPlot',
    component: InningPlot,
} as Meta<typeof InningPlot>;

const Template: Story<typeof InningPlot> = (args) => {
    return <InningPlot {...args} />;
};

const sampleAtbat = atBatList;

export const Default = Template.bind({});
Default.args = {
    atbats: sampleAtbat,
    inning: 1,
};
