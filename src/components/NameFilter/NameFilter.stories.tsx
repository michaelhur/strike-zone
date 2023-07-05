import { useState } from 'react';

import { Meta, Story } from '@storybook/react';

import { NameFilter } from '@components/NameFilter/NameFilter';

export default {
    title: 'Components/NameFilter',
    component: NameFilter,
} as Meta<typeof NameFilter>;

const Template: Story<typeof NameFilter> = (args) => {
    const [selected, setSelected] = useState<string>(args.selected);
    const onSelectName = (name: string) => setSelected(name);

    return <NameFilter selected={selected} onSelectName={onSelectName} />;
};

export const Default = Template.bind({});
Default.args = {
    selected: 'A',
};
