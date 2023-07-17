import { useRecoilValue } from 'recoil';

import { GameListSection } from '@components/GameListSection/GameListSection';
import { Loading } from '@components/Loading/Loading';

import { useGetLatestGameDate } from '@hooks/@query/game/useGetLatestGameDate';

import { HomePageContainer } from '@pages/HomePage/HomePage.styles';
import { HomeMeta } from '@pages/HomePage/components/HomeMeta/HomeMeta';

import { sidebarCollapseState } from '@recoils/sidebar/atom';

import { YYYYMMDD_to_locale } from '@utils/date';

const HomePage = () => {
    const isSidebarOpen = useRecoilValue(sidebarCollapseState);
    const { isLoading, data: dateObject } = useGetLatestGameDate();

    return (
        <HomePageContainer isSidebarOpen={isSidebarOpen}>
            <HomeMeta />
            {isLoading || !dateObject ? (
                <Loading size={60} />
            ) : (
                <GameListSection
                    fixtureDate={dateObject!.date}
                    sectionLabel={`최신 경기 (${YYYYMMDD_to_locale(dateObject!.date)})`}
                    cardCount={3}
                />
            )}
        </HomePageContainer>
    );
};

export default HomePage;
