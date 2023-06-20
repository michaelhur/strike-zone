import { useState } from 'react';

import { Meta, Story } from '@storybook/react';

import { TabInput } from '@components/@shared/TabInput/TabInput';

export default {
    title: 'Components/@shared/TabInput',
    component: TabInput,
} as Meta<typeof TabInput>;

const Template: Story<typeof TabInput> = <T,>(args) => {
    const [selected, setSelected] = useState<T>(args.selected);

    return <TabInput<T> {...args} selected={selected} setSelected={setSelected} />;
};

export const SmallTemplate = Template.bind({});
SmallTemplate.args = {
    selected: 1,
    tabOptions: [
        {
            label: 'Option 1',
            value: 1,
        },
        {
            label: 'Option 2',
            value: 2,
        },
        {
            label: 'Option 3',
            value: 3,
        },
    ],
    size: 'small',
};

export const LargeTemplate = Template.bind({});
LargeTemplate.args = {
    selected: 1,
    tabOptions: [
        {
            label: 'Option 1',
            value: 1,
        },
        {
            label: 'Option 2',
            value: 2,
        },
        {
            label: 'Option 3',
            value: 3,
        },
    ],
    size: 'large',
};
