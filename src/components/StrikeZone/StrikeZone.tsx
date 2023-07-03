import { StrikeZoneDimensions, xScale, yScale } from '@constants/pitch';

import { StrikeZoneContainer, StrikeZonePlot, ZoneLabel } from '@components/StrikeZone/StrikeZone.styles';
import { PlotType } from '@components/StrikeZone/components/PlotType/PlotType';
import { Tooltip } from '@components/StrikeZone/components/Tooltip/Tooltip';
import { Zone } from '@components/StrikeZone/components/Zone/Zone';

import { usePitchHover } from '@hooks/pitch/usePitchHover';
import { useScaledPitches } from '@hooks/pitch/useScaledPitches';
import { useZoneLabel } from '@hooks/pitch/useZoneLabel';

import { AtBat, OutcomeType, PlotTypes, SideType } from '@typings/atbat';

interface StrikeZoneProps {
    atbats: AtBat[];
    outcomeType: OutcomeType;
    sideType: SideType;
    plotType: PlotTypes;
    radius: number;
    hasLabel?: boolean;
}

const StrikeZone = ({ atbats, outcomeType, sideType, plotType, radius = 24, hasLabel }: StrikeZoneProps) => {
    const scaledPitches = useScaledPitches(atbats, outcomeType, sideType);
    const { hoverData, onClickPitch, onUnclickPitch } = usePitchHover(null);
    const zoneLabel = useZoneLabel(outcomeType);

    return (
        <StrikeZoneContainer>
            {hasLabel && <ZoneLabel>{zoneLabel}</ZoneLabel>}
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
