import { useState } from 'react';

import { StrikeZoneDimensions, xScale, yScale } from '@constants/pitch';

import { StrikeZoneContainer } from '@components/StrikeZone/StrikeZone.styles';
import { HeatMap } from '@components/StrikeZone/components/HeatMap/HeatMap';
import { Pitch } from '@components/StrikeZone/components/Pitch/Pitch';
import { Tooltip } from '@components/StrikeZone/components/Tooltip/Tooltip';
import { Zone } from '@components/StrikeZone/components/Zone/Zone';

import { AtBat, Coordinates, PitchPlay } from '@typings/atbat';

import { computeAdjustedCoordinates } from '@utils/pitch';

interface StrikeZoneProps {
    atbats: AtBat[];
    plotType: 'zone' | 'heatmap';
    radius: number;
}

const StrikeZone = ({ atbats, plotType, radius = 24 }: StrikeZoneProps) => {
    const [hoverData, setHoverData] = useState<PitchPlay | null>(null);

    const onClickPitch = (pitchPlay: PitchPlay) => setHoverData(pitchPlay);
    const onUnclickPitch = () => setHoverData(null);

    const scaledPlays: PitchPlay[] = atbats.flatMap((atbat) => {
        const inning = atbat.inning;
        const isTopInning = atbat.isTopInning;
        const atBatIndex = atbat.atBatIndex;
        const batter = atbat.batter;
        const pitcher = atbat.pitcher;
        const home = atbat.home;
        const away = atbat.away;

        return atbat.plays.map((play) => {
            const { coordinates, strikeZoneBottom, strikeZoneTop } = play;

            const adjustedCoordinates = computeAdjustedCoordinates(coordinates, strikeZoneBottom, strikeZoneTop);

            return {
                ...play,
                inning,
                isTopInning,
                atBatIndex,
                batter,
                pitcher,
                home,
                away,
                coordinates: adjustedCoordinates,
            };
        });
    });

    const coordinateList: Coordinates[] = atbats.flatMap((atbat) => {
        return atbat.plays
            .filter((play) => play.outcomeCode === 'C')
            .map((play) => {
                const { coordinates, strikeZoneBottom, strikeZoneTop } = play;

                return computeAdjustedCoordinates(coordinates, strikeZoneBottom, strikeZoneTop);
            });
    });

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
                    {plotType === 'zone' ? (
                        scaledPlays.map((play) => (
                            <Pitch
                                key={play.id}
                                play={play}
                                radius={radius}
                                onClickPitch={onClickPitch}
                                onUnclickPitch={onUnclickPitch}
                            />
                        ))
                    ) : (
                        <HeatMap coordinatesList={coordinateList} />
                    )}
                </g>
            </svg>
            {hoverData && <Tooltip hoverData={hoverData} />}
        </StrikeZoneContainer>
    );
};

export default StrikeZone;
