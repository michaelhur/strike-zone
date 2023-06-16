import React from 'react';

import { GameList } from '@components/GameList/GameList';
import { Loading } from '@components/Loading/Loading';

import { useGetGameList } from '@hooks/@query/game/useGetGameList';

import { GameListSection } from '@pages/Fixture/components/GameListSection';
import { HomePageContainer } from '@pages/Home/Home.styles';

import { getYesterday } from '@utils/date';

const Home = () => {
    const yesterday = getYesterday();

    return (
        <HomePageContainer>
            <GameListSection fixtureDate={yesterday} sectionLabel={'최근 경기'} />
        </HomePageContainer>
    );
};

export default Home;
