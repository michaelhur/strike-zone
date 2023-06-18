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

    return (
        <CalendarSectionContainer>
            <Calendar
                mode={'single'}
                defaultMonth={fixtureDate}
                selected={fixtureDate}
                onSelect={setFixtureDate}
                footer={
                    <Button
                        size={'Medium'}
                        buttonTheme={'fill'}
                        buttonType={'button'}
                        onClickHandler={() => setFixtureDate(latestGameDate)}
                    >
                        최신 경기 보기
                    </Button>
                }
            />
        </CalendarSectionContainer>
    );
};
