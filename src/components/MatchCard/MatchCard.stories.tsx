import type { Meta, Story } from '@storybook/react';

import { MatchCard } from '@components/MatchCard/MatchCard';

export default {
    title: 'Components/MatchCard',
    component: MatchCard,
} as Meta;

const Template: Story<typeof MatchCard> = (args) => {
    return <MatchCard {...args} />;
};

export const Default = Template.bind({});
Default.args = {};
