import { useNavigate, useParams } from 'react-router-dom';

import { DYNAMIC_PATH } from '@constants/routes';
import { useRecoilValue, useSetRecoilState } from 'recoil';

import { GameListSection } from '@components/GameListSection/GameListSection';
import { PopupCalendar } from '@components/PopupCalendar/PopupCalendar';
import { SingleCalendarSection } from '@components/SingleCalendarSection/SingleCalendarSection';

import { useResponsive } from '@hooks/common/useResponsive';

import { FixturePageContainer } from '@pages/FixturePage/FixturePage.styles';

import { latestGameDateState, popupCalendarState } from '@recoils/fixture/atom';
import { sidebarCollapseState } from '@recoils/sidebar/atom';

import { YYYYMMDD_to_date, date_to_YYYYMMDD } from '@utils/date';

const FixtureByDatePage = () => {
    const { date: fixtureDate } = useParams();
    const navigate = useNavigate();
    const latestGameDate = useRecoilValue(latestGameDateState);
    const isSidebarOpen = useRecoilValue(sidebarCollapseState);
    const setIsPopupOpen = useSetRecoilState(popupCalendarState);

    const isTablet = useResponsive(768);
    const isDesktop = useResponsive(1200);

    const cardCount = isDesktop ? 2 : 1;

    const onClickDate = (selectedDay: Date): void => {
        if (!isTablet) setIsPopupOpen(false);
        navigate(`${DYNAMIC_PATH.FIXTURE_BY_DATE(date_to_YYYYMMDD(selectedDay))}`);
    };

    const onClickButton = () => {
        if (!isTablet) setIsPopupOpen(false);
        navigate(`${DYNAMIC_PATH.FIXTURE_BY_DATE(date_to_YYYYMMDD(latestGameDate))}`);
    };

    return (
        <FixturePageContainer isSidebarOpen={isSidebarOpen}>
            {isTablet ? (
                <SingleCalendarSection
                    fixtureDate={YYYYMMDD_to_date(fixtureDate!)}
                    onChangeFixtureDate={onClickDate}
                    onClickButton={onClickButton}
                />
            ) : (
                <PopupCalendar
                    fixtureDate={YYYYMMDD_to_date(fixtureDate!)}
                    onChangeFixtureDate={onClickDate}
                    onClickButton={onClickButton}
                />
            )}
            <GameListSection fixtureDate={fixtureDate!} cardCount={cardCount} />
        </FixturePageContainer>
    );
};

export default FixtureByDatePage;
