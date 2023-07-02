import { useParams } from 'react-router-dom';

import { GameDetailPageContainer } from '@pages/GameDetailPage/GameDetailPage.styles';
import { GameDataSection } from '@pages/GameDetailPage/components/GameDataSection/GameDataSection';
import { StrikeZoneSection } from '@pages/GameDetailPage/components/StrikeZoneSection/StrikeZoneSection';

const GameDetailPage = () => {
    const { slug } = useParams();

    return (
        <GameDetailPageContainer>
            <GameDataSection slug={slug!} />
            <StrikeZoneSection slug={slug!} />
        </GameDetailPageContainer>
    );
};

export default GameDetailPage;
