import { useState } from 'react';
import { DateRange } from 'react-day-picker';

import { Meta, Story } from '@storybook/react';

import { Calendar, CalendarProps } from '@components/@shared/Calendar/Calendar';

export default {
    title: 'Components/@shared/Calendar',
    component: Calendar,
    decorators: [
        (Story) => (
            <div style={{ width: '350px' }}>
                <Story />
            </div>
        ),
    ],
} as Meta<CalendarProps>;

const Template: Story<CalendarProps> = (args) => {
    const [dates, setDates] = useState<Date | Date[] | DateRange | undefined>();

    return <Calendar {...args} selected={dates} onSelect={setDates} />;
};

export const SingleSelectionTemplate = Template.bind({});
SingleSelectionTemplate.args = {
    mode: 'single',
};

export const MultiSelectionTemplate = Template.bind({});
MultiSelectionTemplate.args = {
    mode: 'multiple',
};

export const RangeSelectionTemplate = Template.bind({});
RangeSelectionTemplate.args = {
    mode: 'range',
};
