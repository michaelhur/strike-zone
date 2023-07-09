import { useRecoilValue } from 'recoil';

import { GameListSection } from '@components/GameListSection/GameListSection';
import { Loading } from '@components/Loading/Loading';

import { useGetLatestGameDate } from '@hooks/@query/game/useGetLatestGameDate';

import { HomePageContainer } from '@pages/HomePage/HomePage.styles';

import { sidebarCollapseState } from '@recoils/sidebar/atom';

const HomePage = () => {
    const isSidebarOpen = useRecoilValue(sidebarCollapseState);
    const { isLoading, data: dateObject } = useGetLatestGameDate();

    if (isLoading) return <Loading size={40} />;

    return (
        <HomePageContainer isSidebarOpen={isSidebarOpen}>
            <GameListSection fixtureDate={dateObject!.date} sectionLabel={`최신 경기 (${dateObject!.date} 경기)`} />
        </HomePageContainer>
    );
};

export default HomePage;
