import { playerList } from '@mocks/data/player';
import { Meta, Story } from '@storybook/react';

import { PlayerList } from '@components/PlayerList/PlayerList';

export default {
    title: 'Components/PlayerList',
    components: PlayerList,
} as Meta<typeof PlayerList>;

const Template: Story<typeof PlayerList> = (args) => {
    return <PlayerList {...args} />;
};

const samplePlayerList = playerList.slice(0, 9);

export const Default = Template.bind({});
Default.args = {
    players: samplePlayerList,
};
