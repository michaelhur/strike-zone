import { GameList } from '@components/GameList/GameList';
import Loading from '@components/Loading/Loading';

import { useGetGameList } from '@hooks/@query/game/useGetGameList';

import { HomePageContainer } from '@pages/Home/Home.styles';

const Home = () => {
    // const todayStr = '2023-04-06';
    // const { isLoading, data: gameList } = useGetGameList(`date=${todayStr}`);
    const { isLoading, data: gameList } = useGetGameList();

    if (isLoading) return <Loading />;

    return (
        <HomePageContainer>
            {gameList && <GameList games={gameList} itemViewType={'CARD'} cardCount={3} sectionLabel={'오늘의 경기'} />}
        </HomePageContainer>
    );
};

export default Home;
