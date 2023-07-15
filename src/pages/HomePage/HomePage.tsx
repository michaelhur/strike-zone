import { useRecoilValue } from 'recoil';

import { GameListSection } from '@components/GameListSection/GameListSection';
import { Loading } from '@components/Loading/Loading';

import { useGetLatestGameDate } from '@hooks/@query/game/useGetLatestGameDate';

import { HomePageContainer } from '@pages/HomePage/HomePage.styles';
import { HomeMeta } from '@pages/HomePage/components/HomeMeta/HomeMeta';

import { sidebarCollapseState } from '@recoils/sidebar/atom';

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
                    sectionLabel={`최신 경기 (${dateObject!.date} 경기)`}
                    cardCount={3}
                />
            )}
        </HomePageContainer>
    );
};

export default HomePage;
