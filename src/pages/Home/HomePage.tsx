import Loading from '@components/Loading/Loading';
import MatchItem from '@components/MatchCard/MatchItem';

import { useGetGameList } from '@hooks/@query/game/useGetGameList';

import {
    ContainerTitleWrapper,
    GameListContainer,
    GameListSection,
    HomePageContainer,
} from '@pages/Home/HomePage.styles';

const HomePage = () => {
    // const todayStr = '2023-04-06';
    // const { isLoading, data: gameList } = useGetGameList({ searchParams: `date=${todayStr}` });
    const { isLoading, data: gameList } = useGetGameList();

    if (isLoading) return <Loading />;

    return (
        <HomePageContainer>
            <GameListSection>
                <ContainerTitleWrapper>
                    <h2>오늘의 경기</h2>
                </ContainerTitleWrapper>
                <GameListContainer>
                    {gameList &&
                        gameList.map((game) => {
                            return <MatchItem key={game.id} game={game} itemViewType={'CARD'} cardCount={3} />;
                        })}
                </GameListContainer>
            </GameListSection>
        </HomePageContainer>
    );
};

export default HomePage;
