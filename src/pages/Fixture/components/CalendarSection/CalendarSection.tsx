import { useState } from 'react';

import { addMonths } from 'date-fns';
import { SetterOrUpdater, useRecoilValue } from 'recoil';

import { Button } from '@components/@shared/Button/Button';
import { Calendar } from '@components/@shared/Calendar/Calendar';

import { CalendarSectionContainer } from '@pages/Fixture/components/CalendarSection/CalendarSection.styles';

import { latestGameDateState } from '@recoils/fixture/atom';

export interface CalendarSectionProps {
    fixtureDate: Date | undefined;
    setFixtureDate: SetterOrUpdater<Date | undefined>;
}
export const CalendarSection = ({ fixtureDate, setFixtureDate }: CalendarSectionProps) => {
    const latestGameDate = useRecoilValue(latestGameDateState);
    const [month, setMonth] = useState<Date>(latestGameDate);
    const onClickButton = () => {
        setFixtureDate(latestGameDate);
        setMonth(latestGameDate);
    };

    return (
        <CalendarSectionContainer>
            <Calendar
                mode={'single'}
                // defaultMonth={fixtureDate}
                month={month}
                onMonthChange={setMonth}
                selected={fixtureDate}
                onSelect={setFixtureDate}
                footer={
                    <Button size={'Medium'} buttonTheme={'fill'} buttonType={'button'} onClickHandler={onClickButton}>
                        최신 경기 보기
                    </Button>
                }
            />
        </CalendarSectionContainer>
    );
};
