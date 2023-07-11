import { Meta, Story } from '@storybook/react';

import { PopupCalendar } from '@components/PopupCalendar/PopupCalendar';

import { getYesterday } from '@utils/date';

export default {
    title: 'Components/PopupCalendar',
    component: PopupCalendar,
} as Meta<typeof PopupCalendar>;

const Template: Story<typeof PopupCalendar> = (args) => {
    return <PopupCalendar {...args} />;
};

export const Default = Template.bind({});
Default.args = {
    fixtureDate: getYesterday(),
};
