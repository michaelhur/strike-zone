import { PitchType } from '@constants/pitch';

import {
    Outcome,
    PitchInfo,
    PitchInfoSection,
    PlayerImageSection,
    PlayerInfo,
    PlayerInfoSection,
    PlayerSection,
    PlayerType,
    TooltipContainer,
    Velocity,
} from '@components/StrikeZone/components/Tooltip/Tooltip.styles';

import { useOutcomeType } from '@hooks/pitch/useOutcomeType';

import { PitchPlay } from '@typings/atbat';
import { BatSideEnum, PitchHandEnum } from '@typings/player';

interface TooltipProps {
    hoverData: PitchPlay;
}

export const Tooltip = ({ hoverData }: TooltipProps) => {
    const { isTopInning, batter, pitcher, home, away, outcomeCode, outcomeDescription, pitchType, velocity } =
        hoverData;
    const { name: pitcherName, pitchHand, playerNumber: pitcherNumber } = pitcher;
    const { name: batterName, batSide, positionCode, playerNumber: batterNumber } = batter;
    const outcomeType = useOutcomeType(outcomeCode);

    return (
        <TooltipContainer>
            <PlayerSection>
                <PlayerImageSection>
                    <img
                        src={isTopInning ? away.imageUrl : home.imageUrl}
                        alt={isTopInning ? away.abbreviation : home.abbreviation}
                    />
                </PlayerImageSection>
                <PlayerInfoSection>
                    <PlayerType>PITCHING ({PitchHandEnum[pitchHand]})</PlayerType>
                    <PlayerInfo>
                        {pitcherName} #{pitcherNumber}
                    </PlayerInfo>
                </PlayerInfoSection>
            </PlayerSection>
            <PlayerSection>
                <PlayerImageSection>
                    <img
                        src={isTopInning ? home.imageUrl : away.imageUrl}
                        alt={isTopInning ? home.abbreviation : away.abbreviation}
                    />
                </PlayerImageSection>
                <PlayerInfoSection>
                    <PlayerType>BATTING ({BatSideEnum[batSide]})</PlayerType>
                    <PlayerInfo>
                        {batterName} #{batterNumber} {positionCode}
                    </PlayerInfo>
                </PlayerInfoSection>
            </PlayerSection>
            <PitchInfoSection>
                <PitchInfo>
                    {velocity} MPH - {PitchType[pitchType]}
                </PitchInfo>
                <Outcome outcomeType={outcomeType}>{outcomeDescription}</Outcome>
            </PitchInfoSection>
        </TooltipContainer>
    );
};
