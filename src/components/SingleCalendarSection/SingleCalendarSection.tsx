import { Button } from '@components/@shared/Button/Button';
import { Calendar } from '@components/@shared/Calendar/Calendar';
import { SingleCalendarSectionContainer } from '@components/SingleCalendarSection/SingleCalendarSection.styles';

export interface CalendarSectionProps {
    fixtureDate: Date | undefined;
    onChangeFixtureDate: (Date) => void;
    onClickButton: () => void;
}

export const SingleCalendarSection = ({ fixtureDate, onChangeFixtureDate, onClickButton }: CalendarSectionProps) => {
    return (
        <SingleCalendarSectionContainer>
            <Calendar
                mode={'single'}
                defaultMonth={fixtureDate}
                selected={fixtureDate}
                onSelect={onChangeFixtureDate}
                footer={
                    <Button size={'Medium'} buttonTheme={'fill'} buttonType={'button'} onClickHandler={onClickButton}>
                        최신 경기 보기
                    </Button>
                }
            />
        </SingleCalendarSectionContainer>
    );
};
