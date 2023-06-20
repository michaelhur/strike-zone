import { BrowserRouter } from 'react-router-dom';

import { gameList } from '@mocks/data/game';
import { Meta, Story } from '@storybook/react';

import { GameList, GameListProps } from '@components/GameListSection/components/GameList/GameList';

export default {
    title: 'Components/GameList',
    component: GameList,
    decorators: [
        (Story) => (
            <div style={{ maxWidth: '800px' }}>
                <Story />
            </div>
        ),
    ],
} as Meta<GameListProps>;

const Template: Story<GameListProps> = (args) => {
    return (
        <BrowserRouter>
            <GameList {...args} />
        </BrowserRouter>
    );
};

export const CardViewWithOneItem = Template.bind({});
CardViewWithOneItem.args = {
    games: gameList,
    itemViewType: 'CARD',
    cardCount: 1,
};

export const CardViewWithMultipleItems = Template.bind({});
CardViewWithMultipleItems.args = {
    games: gameList,
    itemViewType: 'CARD',
    cardCount: 2,
};

export const ListView = Template.bind({});
ListView.args = {
    games: gameList,
    itemViewType: 'LIST',
    cardCount: 1,
};
