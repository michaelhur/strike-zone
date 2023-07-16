import { useNavigate } from 'react-router-dom';

import { DYNAMIC_PATH } from '@constants/routes';
import { useRecoilValue, useSetRecoilState } from 'recoil';

import { GameListSection } from '@components/GameListSection/GameListSection';
import { PopupCalendar } from '@components/PopupCalendar/PopupCalendar';
import { SingleCalendarSection } from '@components/SingleCalendarSection/SingleCalendarSection';

import { useResponsive } from '@hooks/common/useResponsive';

import { FixturePageContainer } from '@pages/FixturePage/FixturePage.styles';
import { FixtureMeta } from '@pages/FixturePage/components/FixtureMeta/FixtureMeta';

import { latestGameDateState, popupCalendarState } from '@recoils/fixture/atom';
import { sidebarCollapseState } from '@recoils/sidebar/atom';

import { YYYYMMDD_to_locale, date_to_YYYYMMDD } from '@utils/date';

const FixturePage = () => {
    const navigate = useNavigate();
    const latestGameDate = useRecoilValue(latestGameDateState);
    const isSidebarOpen = useRecoilValue(sidebarCollapseState);
    const setIsPopupOpen = useSetRecoilState(popupCalendarState);

    const gameDateStr = date_to_YYYYMMDD(latestGameDate);
    const gameDateStr_locale = YYYYMMDD_to_locale(gameDateStr);
    const isTablet = useResponsive(768);
    const isDesktop = useResponsive(1200);

    const cardCount = isDesktop ? 2 : 1;

    const onClickDate = (selectedDay: Date): void => {
        if (!isTablet) setIsPopupOpen(false);
        navigate(`${DYNAMIC_PATH.FIXTURE_BY_DATE(date_to_YYYYMMDD(selectedDay))}`);
    };

    const onClickButton = () => {
        if (!isTablet) setIsPopupOpen(false);
        navigate(`${DYNAMIC_PATH.FIXTURE_BY_DATE(gameDateStr)}`);
    };

    return (
        <FixturePageContainer isSidebarOpen={isSidebarOpen}>
            <FixtureMeta dateStr={gameDateStr_locale} />
            {isTablet ? (
                <SingleCalendarSection
                    fixtureDate={latestGameDate}
                    onChangeFixtureDate={onClickDate}
                    onClickButton={onClickButton}
                />
            ) : (
                <PopupCalendar
                    fixtureDate={latestGameDate}
                    onChangeFixtureDate={onClickDate}
                    onClickButton={onClickButton}
                />
            )}
            <GameListSection fixtureDate={gameDateStr} cardCount={cardCount} />
        </FixturePageContainer>
    );
};

export default FixturePage;
