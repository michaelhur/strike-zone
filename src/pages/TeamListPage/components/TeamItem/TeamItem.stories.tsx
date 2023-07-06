import { teamList } from '@mocks/data/team';
import { Meta, Story } from '@storybook/react';

import { TeamItem } from '@pages/TeamListPage/components/TeamItem/TeamItem';

export default {
    title: 'Components/TeamItem',
    component: TeamItem,
} as Meta<typeof TeamItem>;

const Template: Story<typeof TeamItem> = (args) => {
    return <TeamItem {...args} />;
};

export const Default = Template.bind({});
Default.args = {
    team: teamList[0],
};
