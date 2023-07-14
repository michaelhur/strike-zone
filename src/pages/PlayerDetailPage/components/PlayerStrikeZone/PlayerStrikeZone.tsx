import { useEffect, useState } from 'react';

import { SectionTitle } from '@components/Layout/Layout.styles';
import { Loading } from '@components/Loading/Loading';

import { useGetAtbatsByPlayerSlug } from '@hooks/@query/player/useGetAtbatsByPlayerSlug';
import { useGetLatestAtbatsByPlayerSlug } from '@hooks/@query/player/useGetLatestAtbatsByPlayerSlug';
import { useGetPlayer } from '@hooks/@query/player/useGetPlayer';

import { PlayerStrikeZoneContainer } from '@pages/PlayerDetailPage/components/PlayerStrikeZone/PlayerStrikeZone.styles';
import { PlayerZoneType } from '@pages/PlayerDetailPage/components/PlayerZoneType/PlayerZoneType';

interface PlayerStrikeZoneProps {
    slug: string;
    latest: boolean;
}

const PlayerStrikeZone = ({ slug, latest }: PlayerStrikeZoneProps) => {
    const { isLoading: isLoadingPlayer, data: player } = useGetPlayer(slug!);
    const positionType = player?.positionType;
    const isPitcher = positionType === 'Pitcher';

    const { isLoading: isLoadingAtbats, data: atbats } = latest
        ? useGetLatestAtbatsByPlayerSlug(slug, isPitcher)
        : useGetAtbatsByPlayerSlug(slug, isPitcher);

    const sectionTitle = latest ? 'Latest Games' : 'All Games';

    return (
        <PlayerStrikeZoneContainer>
            <SectionTitle>{sectionTitle}</SectionTitle>
            {isLoadingAtbats || !atbats ? (
                <Loading size={60} />
            ) : (
                <PlayerZoneType atbats={atbats} positionType={positionType!} />
            )}
        </PlayerStrikeZoneContainer>
    );
};

export default PlayerStrikeZone;
