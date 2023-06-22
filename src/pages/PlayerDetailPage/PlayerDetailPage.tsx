import { useParams } from 'react-router-dom';

import { GameList } from '@components/GameListSection/components/GameList/GameList';
import { SectionTitleWrapper } from '@components/Layout/Layout';
import { Loading } from '@components/Loading/Loading';

import { useGetGameByPlayerSlug } from '@hooks/@query/game/useGetGameByPlayerSlug';
import { useGetPlayer } from '@hooks/@query/player/useGetPlayer';

import { LeftSection, PlayerDetailPageContainer, RightSection } from '@pages/PlayerDetailPage/PlayerDetailPage.styles';
import { PlayerProfileCard } from '@pages/PlayerDetailPage/components/PlayerProfileCard/PlayerProfileCard';

const PlayerDetailPage = () => {
    const { slug } = useParams();
    const { isLoading: isLoadingPlayers, data: player } = useGetPlayer(slug!);
    const { isLoading: isLoadingGames, data: games } = useGetGameByPlayerSlug(slug!, 1);

    if (isLoadingPlayers || isLoadingGames) return <Loading size={60} />;

    return (
        <PlayerDetailPageContainer>
            <LeftSection>
                <PlayerProfileCard player={player!} />
                <SectionTitleWrapper>
                    <h3>Last 5 Games</h3>
                </SectionTitleWrapper>
                <GameList games={games!} itemViewType={'LIST'} cardCount={1} />
            </LeftSection>
            <RightSection></RightSection>
        </PlayerDetailPageContainer>
    );
};

export default PlayerDetailPage;
