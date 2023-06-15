import { BrowserRouter } from 'react-router-dom';

import { gameList } from '@mocks/data/game';
import type { Meta, Story } from '@storybook/react';

import GameItem, { GameItemProps } from '@components/GameCard/GameItem';

export default {
    title: 'Components/GameItem',
    component: GameItem,
    decorators: [
        (Story) => (
            <div style={{ width: '350px' }}>
                <Story />
            </div>
        ),
    ],
} as Meta;

const Template: Story<GameItemProps> = (args) => {
    return (
        <BrowserRouter>
            <GameItem {...args} />
        </BrowserRouter>
    );
};

const mockedFullTimeGame = gameList.find((game) => game.id === 718686);
const mockedPostponedGame = gameList.find((game) => game.id === 718700);

export const CardViewFullTimeGame = Template.bind({});
CardViewFullTimeGame.args = { game: mockedFullTimeGame, itemViewType: 'CARD' };

export const CardViewPostponedGame = Template.bind({});
CardViewPostponedGame.args = { game: mockedPostponedGame, itemViewType: 'CARD' };

export const ListViewFullTimeGame = Template.bind({});
ListViewFullTimeGame.args = { game: mockedFullTimeGame, itemViewType: 'LIST' };

export const ListViewPostponedGame = Template.bind({});
ListViewPostponedGame.args = { game: mockedPostponedGame, itemViewType: 'LIST' };
