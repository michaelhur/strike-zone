import { Meta, Story } from '@storybook/react';

import { Loading, LoadingProps } from '@components/Loading/Loading';

export default {
    title: 'Components/Loading',
    component: Loading,
    decorators: [
        (Story) => (
            <div style={{ width: '350px' }}>
                <Story />
            </div>
        ),
    ],
} as Meta<LoadingProps>;

const Template: Story<LoadingProps> = () => {
    return <Loading size={40} />;
};

export const Default = Template.bind({});
