import { useEffect, useState } from 'react';

import { BatterPlotValues, PitcherPlotValues } from '@constants/pitch';
import styled from '@emotion/styled';

import { FlexColumnContainer } from '@components/Layout/Layout';
import { Loading } from '@components/Loading/Loading';
import StrikeZone from '@components/StrikeZone/StrikeZone';

import { useGetAtbatsByPlayerSlug } from '@hooks/@query/player/useGetAtbatsByPlayerSlug';
import { useGetLatestAtbatsByPlayerSlug } from '@hooks/@query/player/useGetLatestAtbatsByPlayerSlug';
import { useGetPlayer } from '@hooks/@query/player/useGetPlayer';

import { StrikeZoneList } from '@pages/GameDetailPage/GameDetailPage.styles';
import { SectionTitle } from '@pages/GameDetailPage/components/StrikeZoneSection/StrikeZoneSection.styles';
import { PlayerStrikeZoneContainer } from '@pages/PlayerDetailPage/components/PlayerStrikeZone/PlayerStrikeZone.styles';

import { AtBat } from '@typings/atbat';

interface PlayerStrikeZoneProps {
    slug: string;
    latest: boolean;
}

interface PlayerZoneTypeProps {
    atbats: AtBat[];
    positionType: string;
}

const PlayerZoneType = ({ atbats, positionType }: PlayerZoneTypeProps) => {
    switch (positionType) {
        case 'Pitcher':
            return (
                <StrikeZoneList>
                    {PitcherPlotValues.map((props, index) => {
                        return (
                            <StrikeZone
                                key={index}
                                atbats={atbats}
                                outcomeType={'BallsAndStrikes'}
                                plotType={'zone'}
                                radius={24}
                                {...props}
                            />
                        );
                    })}
                </StrikeZoneList>
            );
        default:
            return (
                <StrikeZoneList>
                    {BatterPlotValues.map((props, index) => {
                        return (
                            <StrikeZone
                                key={index}
                                atbats={atbats}
                                outcomeType={'BallsAndStrikes'}
                                plotType={'zone'}
                                radius={24}
                                {...props}
                            />
                        );
                    })}
                </StrikeZoneList>
            );
    }
};

const PlayerStrikeZone = ({ slug, latest }: PlayerStrikeZoneProps) => {
    const [position, setPosition] = useState<string | null>(null);
    const { isLoading: isLoadingPlayer, data: player } = useGetPlayer(slug!);
    const { isLoading: isLoadingAtbats, data: atbats } = latest
        ? useGetLatestAtbatsByPlayerSlug(slug)
        : useGetAtbatsByPlayerSlug(slug);

    const sectionTitle = latest ? 'Latest Games' : 'All Games';

    useEffect(() => {
        if (!isLoadingPlayer && player) {
            const { positionType } = player;
            setPosition(positionType);
        }
    }, [isLoadingPlayer, player]);

    if (isLoadingPlayer || isLoadingAtbats) return <Loading size={60} />;

    return (
        <PlayerStrikeZoneContainer>
            <SectionTitle>{sectionTitle}</SectionTitle>
            <PlayerZoneType atbats={atbats!} positionType={position!} />
        </PlayerStrikeZoneContainer>
    );
};

export default PlayerStrikeZone;
