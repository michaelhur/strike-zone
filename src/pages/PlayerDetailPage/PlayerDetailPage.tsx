import React from 'react';
import { useParams } from 'react-router-dom';

import { LeftSection, PlayerDetailPageContainer, RightSection } from '@pages/PlayerDetailPage/PlayerDetailPage.styles';
import { PlayerGameList } from '@pages/PlayerDetailPage/components/PlayerGameList/PlayerGameList';
import { PlayerProfileCard } from '@pages/PlayerDetailPage/components/PlayerProfileCard/PlayerProfileCard';

const PlayerDetailPage = () => {
    const { slug } = useParams();

    return (
        <PlayerDetailPageContainer>
            <LeftSection>
                <PlayerProfileCard slug={slug!} />
                <PlayerGameList slug={slug!} />
            </LeftSection>
            <RightSection></RightSection>
        </PlayerDetailPageContainer>
    );
};

export default PlayerDetailPage;
