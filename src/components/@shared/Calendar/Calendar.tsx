import 'react-day-picker/dist/style.css';

import { DayPickerProps } from 'react-day-picker';

import { StyledDayPicker } from '@components/@shared/Calendar/Calendar.styles';

export type CalendarProps = DayPickerProps;

export const Calendar = (props: CalendarProps) => {
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);

    return <StyledDayPicker {...props} toDate={yesterday} />;
};
