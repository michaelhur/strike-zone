import { useState } from 'react';

import { Button } from '@components/@shared/Button/Button';
import { Calendar } from '@components/@shared/Calendar/Calendar';
import { CalendarSection, FixtureDate, PopupCalendarContainer } from '@components/PopupCalendar/PopupCalendar.styles';
import { CalendarSectionProps } from '@components/SingleCalendarSection/SingleCalendarSection';

import { date_to_YYYYMMDD } from '@utils/date';

type PopupCalendarProps = CalendarSectionProps;

export const PopupCalendar = ({ fixtureDate, onChangeFixtureDate, onClickButton }: PopupCalendarProps) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const YYYYMMDD = date_to_YYYYMMDD(fixtureDate);

    const onClickDateString = () => setIsOpen((prevState) => !prevState);
    const onClickDate = (selected: Date) => {
        onChangeFixtureDate(selected);
        setIsOpen(false);
    };
    return (
        <PopupCalendarContainer>
            <span>날짜를 선택해주세요</span>
            <FixtureDate onClick={onClickDateString}>
                <span>{YYYYMMDD}</span>
            </FixtureDate>
            <CalendarSection isOpen={isOpen}>
                <Calendar
                    mode={'single'}
                    defaultMonth={fixtureDate}
                    selected={fixtureDate}
                    onSelect={() => onClickDate}
                    footer={
                        <Button
                            size={'Medium'}
                            buttonTheme={'fill'}
                            buttonType={'button'}
                            onClickHandler={onClickButton}
                        >
                            최신 경기 보기
                        </Button>
                    }
                />
            </CalendarSection>
        </PopupCalendarContainer>
    );
};
