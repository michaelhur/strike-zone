import { useState } from 'react';

import { Meta, Story } from '@storybook/react';

import { Pagination } from '@components/Pagination/Pagination';

export default {
    title: 'Components/Pagination',
    component: Pagination,
} as Meta<typeof Pagination>;

const Template: Story<typeof Pagination> = (args) => {
    const [page, setPage] = useState<number>(args.currentPage);
    return <Pagination {...args} currentPage={page} onClickPage={setPage} />;
};

export const Default = Template.bind({});
Default.args = {
    currentPage: 1,
    totalPage: 134,
};
