import { Meta, Story } from '@storybook/react';

import { TeamProfile } from '@pages/TeamDetailPage/components/TeamProfile/TeamProfile';

export default {
    title: 'Components/TeamProfile',
    component: TeamProfile,
} as Meta<typeof TeamProfile>;

const Template: Story<typeof TeamProfile> = (args) => {
    return <TeamProfile {...args} />;
};

export const Default = Template.bind({});
Default.args = {
    teamId: 144,
};
