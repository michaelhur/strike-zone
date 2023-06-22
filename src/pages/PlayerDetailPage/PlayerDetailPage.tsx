import { useParams } from 'react-router-dom';

import { GameList } from '@components/GameListSection/components/GameList/GameList';
import { Loading } from '@components/Loading/Loading';

import { useGetGameByPlayerSlug } from '@hooks/@query/game/useGetGameByPlayerSlug';
import { useGetPlayer } from '@hooks/@query/player/useGetPlayer';

import { LeftSection, PlayerDetailPageContainer } from '@pages/PlayerDetailPage/PlayerDetailPage.styles';
import { PlayerProfileCard } from '@pages/PlayerDetailPage/components/PlayerProfileCard/PlayerProfileCard';

const PlayerDetailPage = () => {
    const { slug } = useParams();
    const { isLoading: isLoadingPlayers, data: player } = useGetPlayer(slug!);
    const { isLoading: isLoadingGames, data: games } = useGetGameByPlayerSlug(slug!);

    if (isLoadingPlayers || isLoadingGames) return <Loading size={60} />;

    return (
        <PlayerDetailPageContainer>
            <LeftSection>
                <PlayerProfileCard player={player!} />
                <GameList games={games!} itemViewType={'LIST'} cardCount={1} />
            </LeftSection>
        </PlayerDetailPageContainer>
    );
};

export default PlayerDetailPage;
