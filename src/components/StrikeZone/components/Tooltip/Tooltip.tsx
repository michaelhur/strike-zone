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

import { PitchPlay } from '@typings/atbat';
import { BatSideEnum, PitchHandEnum } from '@typings/player';

interface TooltipProps {
    hoverData: PitchPlay;
}

export const Tooltip = ({ hoverData }: TooltipProps) => {
    const { isTopInning, batter, pitcher, home, away, outcomeDescription, pitchType, velocity } = hoverData;
    const { name: pitcherName, pitchHand, playerNumber: pitcherNumber } = pitcher;
    const { name: batterName, batSide, positionCode, playerNumber: batterNumber } = batter;

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
                    {PitchType[pitchType]} <Velocity>({velocity} MPH)</Velocity>
                </PitchInfo>
                <Outcome>{outcomeDescription}</Outcome>
            </PitchInfoSection>
        </TooltipContainer>
    );
};
