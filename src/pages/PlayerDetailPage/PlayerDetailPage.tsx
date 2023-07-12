import React from 'react';
import { useParams } from 'react-router-dom';

import { useRecoilValue } from 'recoil';

import { LeftSection, PlayerDetailPageContainer, RightSection } from '@pages/PlayerDetailPage/PlayerDetailPage.styles';
import { PlayerGameList } from '@pages/PlayerDetailPage/components/PlayerGameList/PlayerGameList';
import { PlayerProfileCard } from '@pages/PlayerDetailPage/components/PlayerProfileCard/PlayerProfileCard';
import PlayerStrikeZone from '@pages/PlayerDetailPage/components/PlayerStrikeZone/PlayerStrikeZone';

import { sidebarCollapseState } from '@recoils/sidebar/atom';

const PlayerDetailPage = () => {
    const { slug } = useParams();
    const isSidebarOpen = useRecoilValue(sidebarCollapseState);

    return (
        <PlayerDetailPageContainer isSidebarOpen={isSidebarOpen}>
            <LeftSection>
                <PlayerProfileCard slug={slug!} />
                <PlayerGameList slug={slug!} />
            </LeftSection>
            <RightSection>
                <PlayerStrikeZone slug={slug!} latest={true} />
                <PlayerStrikeZone slug={slug!} latest={false} />
            </RightSection>
        </PlayerDetailPageContainer>
    );
};

export default PlayerDetailPage;
