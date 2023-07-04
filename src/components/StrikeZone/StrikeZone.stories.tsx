import { css } from '@emotion/react';
import { atBatList } from '@mocks/data/atBat';
import { Meta, Story } from '@storybook/react';

import StrikeZone from '@components/StrikeZone/StrikeZone';

import { AtBat } from '@typings/atbat';

export default {
    title: 'Components/StrikeZone',
    components: StrikeZone,
    decorators: [
        (Story) => (
            <div css={css({ width: '350px' })}>
                <Story />
            </div>
        ),
    ],
} as Meta<typeof StrikeZone>;

const Template: Story<typeof StrikeZone> = (args) => {
    return <StrikeZone {...args} />;
};
const sampleAtbats: AtBat[] = atBatList;

export const DefaultZone = Template.bind({});
DefaultZone.args = {
    atbats: sampleAtbats,
    outcomeType: 'All',
    sideType: 'All',
    plotType: 'zone',
};

export const DefaultHeatmap = Template.bind({});
DefaultHeatmap.args = {
    atbats: sampleAtbats,
    outcomeType: 'CalledStrike',
    sideType: 'All',
    plotType: 'heatmap',
};
