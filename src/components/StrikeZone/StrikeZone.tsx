import { StrikeZoneDimensions, xScale, yScale } from '@constants/pitch';

import { StrikeZoneContainer, StrikeZonePlot, ZoneLabel } from '@components/StrikeZone/StrikeZone.styles';
import { PlotType } from '@components/StrikeZone/components/PlotType/PlotType';
import { Tooltip } from '@components/StrikeZone/components/Tooltip/Tooltip';
import { Zone } from '@components/StrikeZone/components/Zone/Zone';

import { usePitchHover } from '@hooks/pitch/usePitchHover';
import { useScaledPitches } from '@hooks/pitch/useScaledPitches';

import { AtBat, OutcomeType, PlotTypes, SideType } from '@typings/atbat';
import { PlayerSide } from '@typings/player';

interface StrikeZoneProps {
    atbats: AtBat[];
    plotType: PlotTypes;
    zoneLabel: string;
    radius: number;
    outcomeType?: OutcomeType;
    sideType?: SideType;
    batSide?: PlayerSide;
    pitchHand?: PlayerSide;
    inningType?: number;
}

const StrikeZone = ({
    atbats,
    plotType,
    zoneLabel,
    radius = 24,
    outcomeType,
    sideType,
    batSide,
    pitchHand,
    inningType,
}: StrikeZoneProps) => {
    const scaledPitches = useScaledPitches(atbats, outcomeType, sideType, batSide, pitchHand, inningType);
    const { hoverData, onClickPitch, onUnclickPitch } = usePitchHover(null);

    return (
        <StrikeZoneContainer>
            <ZoneLabel>{zoneLabel}</ZoneLabel>
            <StrikeZonePlot width={StrikeZoneDimensions.WIDTH} height={StrikeZoneDimensions.HEIGHT}>
                <g width={StrikeZoneDimensions.WIDTH} height={StrikeZoneDimensions.HEIGHT}>
                    <g transform={`translate(${xScale(StrikeZoneDimensions.LEFT)},0)`}>
                        <Zone
                            xMin={xScale(StrikeZoneDimensions.LEFT)}
                            xMax={xScale(StrikeZoneDimensions.RIGHT)}
                            yMin={yScale(StrikeZoneDimensions.BOTTOM)}
                            yMax={yScale(StrikeZoneDimensions.TOP)}
                            stroke="var(--grey1000)"
                            fill="None"
                        />
                    </g>
                    <PlotType
                        plotType={plotType}
                        scaledPitches={scaledPitches}
                        radius={radius}
                        onClickPitch={onClickPitch}
                        onUnclickPitch={onUnclickPitch}
                    />
                </g>
            </StrikeZonePlot>
            {hoverData && <Tooltip hoverData={hoverData} />}
        </StrikeZoneContainer>
    );
};

export default StrikeZone;
