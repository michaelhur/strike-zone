import { useState } from 'react';
import { DayPicker } from 'react-day-picker';

import 'react-day-picker/dist/style.css';

import { DayPickerWrapper, FixturePageContainer, StyledDayPicker } from '@pages/Fixture/Fixture.styles';

const CalendarSection = () => {
    const [selected, setSelected] = useState<Date>();
    return (
        <DayPickerWrapper>
            <StyledDayPicker showOutsideDays mode="single" selected={selected} onSelect={setSelected} />
        </DayPickerWrapper>
    );
};

const Fixture = () => {
    return (
        <FixturePageContainer>
            <CalendarSection />
        </FixturePageContainer>
    );
};

export default Fixture;
