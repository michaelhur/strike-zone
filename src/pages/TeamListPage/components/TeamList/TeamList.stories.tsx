import { teamList } from '@mocks/data/team';
import { Meta, Story } from '@storybook/react';

import { TeamList } from '@pages/TeamListPage/components/TeamList/TeamList';

export default {
    title: 'Components/TeamList',
    component: TeamList,
} as Meta<typeof TeamList>;

const Template: Story<typeof TeamList> = (args) => {
    return <TeamList {...args} />;
};

export const Default = Template.bind({});
Default.args = {
    teams: teamList,
};
