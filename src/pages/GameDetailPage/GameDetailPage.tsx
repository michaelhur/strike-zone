import { useParams } from 'react-router-dom';

import { useRecoilValue } from 'recoil';

import { GameDetailPageContainer } from '@pages/GameDetailPage/GameDetailPage.styles';
import { GameDataSection } from '@pages/GameDetailPage/components/GameDataSection/GameDataSection';
import { GameDetailMeta } from '@pages/GameDetailPage/components/GameDetailMeta/GameDetailMeta';
import { ZoneType } from '@pages/GameDetailPage/components/ZoneType/ZoneType';

import { sidebarCollapseState } from '@recoils/sidebar/atom';

const GameDetailPage = () => {
    const { slug } = useParams();
    const isSidebarOpen = useRecoilValue(sidebarCollapseState);

    return (
        <GameDetailPageContainer isSidebarOpen={isSidebarOpen}>
            <GameDetailMeta slug={slug!} />
            <GameDataSection slug={slug!} />
            <ZoneType slug={slug!} />
        </GameDetailPageContainer>
    );
};

export default GameDetailPage;
