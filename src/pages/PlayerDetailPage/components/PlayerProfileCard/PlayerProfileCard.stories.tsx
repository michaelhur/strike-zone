import { css } from '@emotion/react';
import { Meta, Story } from '@storybook/react';

import { PlayerProfileCard } from '@pages/PlayerDetailPage/components/PlayerProfileCard/PlayerProfileCard';

export default {
    title: 'Components/PlayerProfileCard',
    component: PlayerProfileCard,
    decorators: [
        (Story) => (
            <div css={css({ width: '350px' })}>
                <Story />
            </div>
        ),
    ],
} as Meta<typeof PlayerProfileCard>;

const Template: Story<typeof PlayerProfileCard> = (args) => {
    return <PlayerProfileCard {...args} />;
};

export const Default = Template.bind({});
Default.args = {
    slug: 'paul-blackburn-621112',
};
