import { GameListSection } from '@components/GameListSection/GameListSection';
import { Loading } from '@components/Loading/Loading';

import { useGetLatestGameDate } from '@hooks/@query/game/useGetLatestGameDate';

import { HomePageContainer } from '@pages/Home/Home.styles';

const Home = () => {
    const { isLoading, data: dateObject } = useGetLatestGameDate();

    if (isLoading) return <Loading size={40} />;

    return (
        <HomePageContainer>
            <GameListSection fixtureDate={dateObject!.date} sectionLabel={`최신 경기 (${dateObject!.date} 경기)`} />
        </HomePageContainer>
    );
};

export default Home;
