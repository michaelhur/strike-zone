import { BrowserRouter } from 'react-router-dom';

import { gameList } from '@mocks/data/game';
import { action } from '@storybook/addon-actions';
import type { Meta, Story } from '@storybook/react';

import MatchCard, { MatchCardProps } from '@components/MatchCard/MatchCard';

export default {
    title: 'Components/MatchCard',
    component: MatchCard,
    decorators: [
        (Story) => (
            <div style={{ width: '350px' }}>
                <Story />
            </div>
        ),
    ],
} as Meta;

const Template: Story<MatchCardProps> = (args) => {
    return (
        <BrowserRouter>
            <MatchCard {...args} />
        </BrowserRouter>
    );
};

const mockedFullTimeGame = gameList.find((game) => game.id === 718686);
const mockedPostPonedGame = gameList.find((game) => game.id === 718700);

export const FullTimeGame = Template.bind({});
FullTimeGame.args = { game: mockedFullTimeGame };

export const PostponedGame = Template.bind({});
PostponedGame.args = { game: mockedPostPonedGame };
