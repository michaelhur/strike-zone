import { useRecoilState } from 'recoil';

import { Calendar } from '@components/@shared/Calendar/Calendar';

import { FixturePageContainer } from '@pages/Fixture/Fixture.styles';
import { GameListSection } from '@pages/Fixture/components/GameListSection';

import { fixtureDateState } from '@recoils/fixture/atom';

const Fixture = () => {
    const [fixtureDate, setFixtureDate] = useRecoilState<Date | undefined>(fixtureDateState);

    return (
        <FixturePageContainer>
            <Calendar mode={'single'} defaultMonth={fixtureDate} selected={fixtureDate} onSelect={setFixtureDate} />
            <GameListSection fixtureDate={fixtureDate} />
        </FixturePageContainer>
    );
};

export default Fixture;
