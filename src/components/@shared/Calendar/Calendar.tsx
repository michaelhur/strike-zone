import 'react-day-picker/dist/style.css';

import { useState } from 'react';
import { DaySelectionMode, Matcher } from 'react-day-picker';

import { StyledDayPicker } from '@components/@shared/Calendar/Calendar.styles';

export interface CalendarProps {
    mode: DaySelectionMode;
    selected: Matcher;
}

export const Calendar = () => {
    const [selected, setSelected] = useState<Date>();
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);

    return <StyledDayPicker mode="single" selected={selected} onSelect={setSelected} toDate={yesterday} />;
};
