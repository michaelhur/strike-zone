import { useState } from 'react';
import { DateRange } from 'react-day-picker';

import { Meta, Story } from '@storybook/react';

import { Calendar, CalendarProps } from '@components/@shared/Calendar/Calendar';

import { getYesterday } from '@utils/date';

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

const yesterday = getYesterday();
const tenDaysAgo = new Date();
tenDaysAgo.setDate(tenDaysAgo.getDate() - 10);

const Template: Story<CalendarProps> = (args) => {
    const [dates, setDates] = useState<Date | Date[] | DateRange | undefined>(args.selected);

    return <Calendar {...args} selected={dates} onSelect={setDates} />;
};

export const SingleSelectionTemplate = Template.bind({});
SingleSelectionTemplate.args = {
    mode: 'single',
    selected: yesterday,
};

export const MultiSelectionTemplate = Template.bind({});
MultiSelectionTemplate.args = {
    mode: 'multiple',
    selected: [yesterday, tenDaysAgo],
};

export const RangeSelectionTemplate = Template.bind({});
RangeSelectionTemplate.args = {
    mode: 'range',
    selected: {
        from: tenDaysAgo,
        to: yesterday,
    },
};
