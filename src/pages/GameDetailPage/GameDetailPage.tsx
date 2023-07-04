import { useParams } from 'react-router-dom';

import { GameDetailPageContainer } from '@pages/GameDetailPage/GameDetailPage.styles';
import { GameDataSection } from '@pages/GameDetailPage/components/GameDataSection/GameDataSection';
import { ZoneType } from '@pages/GameDetailPage/components/ZoneType/ZoneType';

const GameDetailPage = () => {
    const { slug } = useParams();

    return (
        <GameDetailPageContainer>
            <GameDataSection slug={slug!} />
            <ZoneType slug={slug!} />
        </GameDetailPageContainer>
    );
};

export default GameDetailPage;
