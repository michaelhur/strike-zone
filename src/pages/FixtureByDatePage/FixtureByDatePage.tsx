import { useNavigate, useParams } from 'react-router-dom';

import { DYNAMIC_PATH } from '@constants/routes';
import { useRecoilValue } from 'recoil';

import { GameListSection } from '@components/GameListSection/GameListSection';
import { SingleCalendarSection } from '@components/SingleCalendarSection/SingleCalendarSection';

import { FixturePageContainer } from '@pages/FixturePage/FixturePage.styles';

import { latestGameDateState } from '@recoils/fixture/atom';

import { YYYYMMDD_to_date, date_to_YYYYMMDD } from '@utils/date';

const FixtureByDatePage = () => {
    const { date: fixtureDate } = useParams();
    const latestGameDate = useRecoilValue(latestGameDateState);
    const navigate = useNavigate();

    const onClickDate = (selectedDay: Date): void => {
        navigate(`${DYNAMIC_PATH.FIXTURE_BY_DATE(date_to_YYYYMMDD(selectedDay))}`);
    };

    const onClickButton = () => {
        navigate(`${DYNAMIC_PATH.FIXTURE_BY_DATE(date_to_YYYYMMDD(latestGameDate))}`);
    };

    return (
        <FixturePageContainer>
            <SingleCalendarSection
                fixtureDate={YYYYMMDD_to_date(fixtureDate!)}
                onChangeFixtureDate={onClickDate}
                onClickButton={onClickButton}
            />
            <GameListSection fixtureDate={fixtureDate!} />
        </FixturePageContainer>
    );
};

export default FixtureByDatePage;
