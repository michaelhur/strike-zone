import { useParams } from 'react-router-dom';

import { GameDetailPageContainer } from '@pages/GameDetailPage/GameDetailPage.styles';
import { GameDataSection } from '@pages/GameDetailPage/components/GameDataSection/GameDataSection';

const GameDetailPage = () => {
    const { slug } = useParams();

    return (
        <GameDetailPageContainer>
            <GameDataSection slug={slug!} />
            Game Detail Page: {slug}
        </GameDetailPageContainer>
    );
};

export default GameDetailPage;
