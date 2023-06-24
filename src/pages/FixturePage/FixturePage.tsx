import { useNavigate } from 'react-router-dom';

import { DYNAMIC_PATH } from '@constants/routes';
import { useRecoilValue } from 'recoil';

import { GameListSection } from '@components/GameListSection/GameListSection';
import { SingleCalendarSection } from '@components/SingleCalendarSection/SingleCalendarSection';

import { FixturePageContainer } from '@pages/FixturePage/FixturePage.styles';

import { latestGameDateState } from '@recoils/fixture/atom';

import { date_to_YYYYMMDD } from '@utils/date';

const FixturePage = () => {
    const navigate = useNavigate();
    const latestGameDate = useRecoilValue(latestGameDateState);

    const onClickDate = (selectedDay: Date): void => {
        navigate(`${DYNAMIC_PATH.FIXTURE_BY_DATE(date_to_YYYYMMDD(selectedDay))}`);
    };

    const onClickButton = () => {
        navigate(`${DYNAMIC_PATH.FIXTURE_BY_DATE(date_to_YYYYMMDD(latestGameDate))}`);
    };

    return (
        <FixturePageContainer>
            <SingleCalendarSection
                fixtureDate={latestGameDate}
                onChangeFixtureDate={onClickDate}
                onClickButton={onClickButton}
            />
            <GameListSection fixtureDate={date_to_YYYYMMDD(latestGameDate)} />
        </FixturePageContainer>
    );
};

export default FixturePage;
