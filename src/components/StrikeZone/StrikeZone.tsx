import { useState } from 'react';

import { StrikeZoneDimensions } from '@constants/pitch';
import * as d3 from 'd3';

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
    width: number;
    height: number;
    radius: number;
}

const StrikeZone = ({ atbats, plotType, width = 300, height = 400, radius = 24 }: StrikeZoneProps) => {
    const [hoverData, setHoverData] = useState<PitchPlay | null>(null);

    const onClickPitch = (pitchPlay: PitchPlay) => setHoverData(pitchPlay);
    const onUnclickPitch = () => setHoverData(null);

    const yScale = d3.scaleLinear().domain([0.5, 4.5]).range([height, 0]);
    const xScale = d3.scaleLinear().domain([-1.5, 1.5]).range([0, width]);

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

            const adjustedCoordinates = computeAdjustedCoordinates(
                coordinates,
                strikeZoneBottom,
                strikeZoneTop,
                xScale,
                yScale,
            );

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

                return computeAdjustedCoordinates(coordinates, strikeZoneBottom, strikeZoneTop, xScale, yScale);
            });
    });

    return (
        <StrikeZoneContainer>
            <svg width={width} height={height}>
                <g width={width} height={height}>
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
                        <HeatMap coordinatesList={coordinateList} width={width} height={height} />
                    )}
                </g>
            </svg>
            {hoverData && <Tooltip hoverData={hoverData} />}
        </StrikeZoneContainer>
    );
};

export default StrikeZone;
