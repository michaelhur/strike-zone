import { Meta, Story } from '@storybook/react';

import StrikeZone from '@components/StrikeZone/StrikeZone';

export default {
    title: 'Components/StrikeZone',
    components: StrikeZone,
} as Meta<typeof StrikeZone>;

const Template: Story<typeof StrikeZone> = (args) => {
    return <StrikeZone {...args} />;
};

const coordinates = [
    {
        x: -0.85,
        y: 4,
    },
    {
        x: -0.85,
        y: 3.5,
    },
    {
        x: -0.85,
        y: 2,
    },
    {
        x: -0.85,
        y: 1,
    },
    {
        x: -0.33,
        y: 4,
    },
    {
        x: -0.33,
        y: 3.5,
    },
    {
        x: -0.33,
        y: 2,
    },
    {
        x: -0.33,
        y: 1,
    },
    {
        x: 0,
        y: 4,
    },
    {
        x: 0,
        y: 3.5,
    },
    {
        x: 0,
        y: 2,
    },
    {
        x: 0,
        y: 1,
    },
    {
        x: 0.33,
        y: 4,
    },
    {
        x: 0.33,
        y: 3.5,
    },
    {
        x: 0.33,
        y: 2,
    },
    {
        x: 0.33,
        y: 1,
    },
    {
        x: 0.85,
        y: 4,
    },
    {
        x: 0.85,
        y: 3.5,
    },
    {
        x: 0.85,
        y: 2,
    },
    {
        x: 0.85,
        y: 1,
    },
];

export const Default = Template.bind({});
Default.args = {
    height: 400,
    width: 300,
    coordinates: coordinates,
};
