import { playerList } from '@mocks/data/player';
import { Meta, Story } from '@storybook/react';

import { PlayerListItem } from '@pages/PlayerList/components/PlayerListItem/PlayerListItem';

export default {
    title: 'Components/PlayerListItem',
    component: PlayerListItem,
} as Meta<typeof PlayerListItem>;

const Template: Story<typeof PlayerListItem> = (args) => {
    return <PlayerListItem {...args} />;
};

const samplePlayer = playerList[0];

export const Default = Template.bind({});
Default.args = {
    player: samplePlayer,
};
