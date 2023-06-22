import { useParams } from 'react-router-dom';

import { Loading } from '@components/Loading/Loading';

import { useGetPlayer } from '@hooks/@query/player/useGetPlayer';

import { LeftSection, PlayerDetailPageContainer } from '@pages/PlayerDetailPage/PlayerDetailPage.styles';
import { PlayerProfileCard } from '@pages/PlayerDetailPage/components/PlayerProfileCard/PlayerProfileCard';

const PlayerDetailPage = () => {
    const { slug } = useParams();
    const { isLoading, data: player } = useGetPlayer(slug!);

    if (isLoading) return <Loading size={60} />;

    return (
        <PlayerDetailPageContainer>
            <LeftSection>
                <PlayerProfileCard player={player!} />
            </LeftSection>
        </PlayerDetailPageContainer>
    );
};

export default PlayerDetailPage;
