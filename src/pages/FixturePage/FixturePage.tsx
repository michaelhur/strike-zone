import { useNavigate } from 'react-router-dom';

import { DYNAMIC_PATH } from '@constants/routes';
import { useRecoilValue, useSetRecoilState } from 'recoil';

import { GameListSection } from '@components/GameListSection/GameListSection';
import { PopupCalendar } from '@components/PopupCalendar/PopupCalendar';
import { SingleCalendarSection } from '@components/SingleCalendarSection/SingleCalendarSection';

import { useResponsive } from '@hooks/common/useResponsive';

import { FixturePageContainer } from '@pages/FixturePage/FixturePage.styles';

import { latestGameDateState, popupCalendarState } from '@recoils/fixture/atom';
import { sidebarCollapseState } from '@recoils/sidebar/atom';

import { date_to_YYYYMMDD } from '@utils/date';

const FixturePage = () => {
    const navigate = useNavigate();
    const latestGameDate = useRecoilValue(latestGameDateState);
    const isSidebarOpen = useRecoilValue(sidebarCollapseState);
    const setIsPopupOpen = useSetRecoilState(popupCalendarState);

    const isDesktop = useResponsive(768);

    const onClickDate = (selectedDay: Date): void => {
        if (!isDesktop) setIsPopupOpen(false);
        navigate(`${DYNAMIC_PATH.FIXTURE_BY_DATE(date_to_YYYYMMDD(selectedDay))}`);
    };

    const onClickButton = () => {
        if (!isDesktop) setIsPopupOpen(false);
        navigate(`${DYNAMIC_PATH.FIXTURE_BY_DATE(date_to_YYYYMMDD(latestGameDate))}`);
    };

    return (
        <FixturePageContainer isSidebarOpen={isSidebarOpen}>
            {isDesktop ? (
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
            <GameListSection fixtureDate={date_to_YYYYMMDD(latestGameDate)} />
        </FixturePageContainer>
    );
};

export default FixturePage;
