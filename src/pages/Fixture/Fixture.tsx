import { useRecoilState } from 'recoil';

import { GameListSection } from '@components/GameListSection/GameListSection';

import { FixturePageContainer } from '@pages/Fixture/Fixture.styles';
import { CalendarSection } from '@pages/Fixture/components/CalendarSection/CalendarSection';

import { fixtureDateState } from '@recoils/fixture/atom';

import { date_to_YYYYMMDD } from '@utils/date';

const Fixture = () => {
    const [fixtureDate, setFixtureDate] = useRecoilState<Date | undefined>(fixtureDateState);

    return (
        <FixturePageContainer>
            <CalendarSection fixtureDate={fixtureDate} setFixtureDate={setFixtureDate} />
            <GameListSection fixtureDate={date_to_YYYYMMDD(fixtureDate)} />
        </FixturePageContainer>
    );
};

export default Fixture;
