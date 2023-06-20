import { useState } from 'react';

import { Meta, Story } from '@storybook/react';

import { SingleCalendarSection } from '@components/SingleCalendarSection/SingleCalendarSection';

import { getYesterday } from '@utils/date';

export default {
    title: 'Composition/CalendarSection',
    component: SingleCalendarSection,
} as Meta<typeof SingleCalendarSection>;

const Template: Story<typeof SingleCalendarSection> = (args) => {
    const [fixtureDate, setFixtureDate] = useState<Date | undefined>(getYesterday);

    return <SingleCalendarSection {...args} fixtureDate={fixtureDate!} onChangeFixtureDate={setFixtureDate} />;
};

export const Default = Template.bind({});
Default.args = {};
