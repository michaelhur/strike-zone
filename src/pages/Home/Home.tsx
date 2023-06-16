import React, { useEffect, useState } from 'react';

import { GameList } from '@components/GameList/GameList';
import { PageSectionContainer, SectionTitleWrapper } from '@components/Layout/Layout';
import { Loading } from '@components/Loading/Loading';

import { useGetLatestGameList } from '@hooks/@query/game/useGetLatestGameList';

import { GameListWrapper } from '@pages/Fixture/components/GameListSection.styles';
import { HomePageContainer } from '@pages/Home/Home.styles';

const Home = () => {
    const [date, setDate] = useState<string>();
    const { isLoading, data: gameList } = useGetLatestGameList();

    useEffect(() => {
        if (!isLoading) setDate(gameList![0].date);
    }, [isLoading, setDate]);

    if (isLoading) return <Loading size={40} />;

    return (
        <HomePageContainer>
            <PageSectionContainer>
                <SectionTitleWrapper>
                    <h2>{`최신 경기: ${date}`}</h2>
                </SectionTitleWrapper>
                {gameList && (
                    <GameListWrapper>
                        <GameList games={gameList} itemViewType={'LIST'} cardCount={1} />
                    </GameListWrapper>
                )}
            </PageSectionContainer>{' '}
        </HomePageContainer>
    );
};

export default Home;
