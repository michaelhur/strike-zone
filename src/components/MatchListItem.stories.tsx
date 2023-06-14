import { BrowserRouter } from 'react-router-dom';

import { gameList } from '@mocks/data/game';
import type { Meta, Story } from '@storybook/react';

import MatchListItem from '@components/MatchListItem';

export default {
    title: 'Components/MatchListItem',
    component: MatchListItem,
    decorators: [
        (Story) => (
            <div style={{ width: '350px' }}>
                <Story />
            </div>
        ),
    ],
} as Meta;

const Template: Story<typeof MatchListItem> = (args) => {
    return (
        <BrowserRouter>
            <MatchListItem {...args} />
        </BrowserRouter>
    );
};

const mockedFullTimeGame = gameList.find((game) => game.id === 718686);
const mockedPostPonedGame = gameList.find((game) => game.id === 718700);

export const FullTimeGame = Template.bind({});
FullTimeGame.args = { game: mockedFullTimeGame };

export const PostponedGame = Template.bind({});
PostponedGame.args = { game: mockedPostPonedGame };
