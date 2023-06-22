import { playerList } from '@mocks/data/player';
import { Meta, Story } from '@storybook/react';

import { PlayerProfileCard } from '@pages/PlayerDetailPage/components/PlayerProfileCard/PlayerProfileCard';

export default {
    title: 'Components/PlayerProfileCard',
    component: PlayerProfileCard,
} as Meta<typeof PlayerProfileCard>;

const Template: Story<typeof PlayerProfileCard> = (args) => {
    return <PlayerProfileCard {...args} />;
};

const samplePlayer = playerList[1];

export const Default = Template.bind({});
Default.args = {
    player: samplePlayer,
};
