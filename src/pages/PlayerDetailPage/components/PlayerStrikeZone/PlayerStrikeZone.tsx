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
    const [position, setPosition] = useState<string | null>(null);

    const { isLoading: isLoadingPlayer, data: player } = useGetPlayer(slug);
    const { isLoading: isLoadingAtbats, data: atbats } = latest
        ? useGetLatestAtbatsByPlayerSlug(slug, position === 'Pitcher')
        : useGetAtbatsByPlayerSlug(slug, position === 'Pitcher');

    const sectionTitle = latest ? 'Latest Games' : 'All Games';

    useEffect(() => {
        if (!isLoadingPlayer && player) {
            const { positionType } = player;
            setPosition(positionType);
        }
    }, [isLoadingPlayer, player]);

    return (
        <PlayerStrikeZoneContainer>
            <SectionTitle>{sectionTitle}</SectionTitle>
            {isLoadingAtbats || !atbats ? (
                <Loading size={60} />
            ) : (
                <PlayerZoneType atbats={atbats} positionType={position!} />
            )}
        </PlayerStrikeZoneContainer>
    );
};

export default PlayerStrikeZone;
