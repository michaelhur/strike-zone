import { useParams } from 'react-router-dom';

import { useRecoilValue } from 'recoil';

import { GameDetailPageContainer } from '@pages/GameDetailPage/GameDetailPage.styles';
import { GameDataSection } from '@pages/GameDetailPage/components/GameDataSection/GameDataSection';
import { ZoneType } from '@pages/GameDetailPage/components/ZoneType/ZoneType';

import { sidebarCollapseState } from '@recoils/sidebar/atom';

const GameDetailPage = () => {
    const { slug } = useParams();
    const isSidebarOpen = useRecoilValue(sidebarCollapseState);

    return (
        <GameDetailPageContainer isSidebarOpen={isSidebarOpen}>
            <GameDataSection slug={slug!} />
            <ZoneType slug={slug!} />
        </GameDetailPageContainer>
    );
};

export default GameDetailPage;
