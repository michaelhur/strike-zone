import React from 'react';

import { GameList } from '@components/GameList/GameList';
import { Loading } from '@components/Loading/Loading';

import { useGetGameList } from '@hooks/@query/game/useGetGameList';

import { HomePageContainer } from '@pages/Home/Home.styles';

const Home = () => {
    const { isLoading, data: gameList } = useGetGameList();

    if (isLoading) return <Loading size={40} />;

    return (
        <HomePageContainer>
            {gameList && <GameList games={gameList} itemViewType={'CARD'} cardCount={3} />}
        </HomePageContainer>
    );
};

export default Home;
