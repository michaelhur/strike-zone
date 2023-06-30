import { StrikeZoneDimensions, xScale, yScale } from '@constants/pitch';

import { StrikeZoneContainer } from '@components/StrikeZone/StrikeZone.styles';
import { PlotType } from '@components/StrikeZone/components/PlotType/PlotType';
import { Tooltip } from '@components/StrikeZone/components/Tooltip/Tooltip';
import { Zone } from '@components/StrikeZone/components/Zone/Zone';

import { usePitchHover } from '@hooks/pitch/usePitchHover';
import { useScaledPitches } from '@hooks/pitch/useScaledPitches';

import { AtBat, PlotTypes } from '@typings/atbat';

interface StrikeZoneProps {
    atbats: AtBat[];
    plotType: PlotTypes;
    radius: number;
}

const StrikeZone = ({ atbats, plotType, radius = 24 }: StrikeZoneProps) => {
    const scaledPitches = useScaledPitches(atbats);
    const { hoverData, onClickPitch, onUnclickPitch } = usePitchHover(null);

    return (
        <StrikeZoneContainer>
            <svg width={StrikeZoneDimensions.WIDTH} height={StrikeZoneDimensions.HEIGHT}>
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
            </svg>
            {hoverData && <Tooltip hoverData={hoverData} />}
        </StrikeZoneContainer>
    );
};

export default StrikeZone;
