import { BrowserRouter } from 'react-router-dom';

import type { Meta, Story } from '@storybook/react';

import { MatchCard } from '@components/MatchCard/MatchCard';

export default {
    title: 'Components/MatchCard',
    component: MatchCard,
} as Meta;

const Template: Story<typeof MatchCard> = (args) => {
    return (
        <BrowserRouter>
            <MatchCard {...args} />;
        </BrowserRouter>
    );
};

export const FullTimeGame = Template.bind({});
FullTimeGame.args = {};

export const PostponedGame = Template.bind({});
PostponedGame.args = {};
