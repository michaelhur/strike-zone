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
            <div css={css({ width: '300px' })}>
                <Story />
            </div>
        ),
    ],
} as Meta<typeof StrikeZone>;

const Template: Story<typeof StrikeZone> = (args) => {
    return <StrikeZone {...args} />;
};
const sampleAtbats: AtBat[] = atBatList.splice(0, 20);
const strikesAtbats: AtBat[] = atBatList;

export const DefaultZone = Template.bind({});
DefaultZone.args = {
    atbats: sampleAtbats,
    plotType: 'zone',
    height: 400,
    width: 300,
};

export const DefaultHeatmap = Template.bind({});
DefaultHeatmap.args = {
    atbats: sampleAtbats,
    plotType: 'heatmap',
    height: 400,
    width: 300,
};

export const SampleZone = Template.bind({});
SampleZone.args = {
    atbats: strikesAtbats,
    plotType: 'zone',
    height: 400,
    width: 300,
};

export const SampleHeatMap = Template.bind({});
SampleHeatMap.args = {
    atbats: strikesAtbats,
    plotType: 'heatmap',
    height: 400,
    width: 300,
};
