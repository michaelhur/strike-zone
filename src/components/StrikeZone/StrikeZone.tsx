import { StrikeZoneDimensions } from '@constants/pitch';
import * as d3 from 'd3';

import { StrikeZoneContainer } from '@components/StrikeZone/StrikeZone.styles';
import { HeatMap } from '@components/StrikeZone/components/HeatMap/HeatMap';
import { Pitch } from '@components/StrikeZone/components/Pitch/Pitch';
import { Zone } from '@components/StrikeZone/components/Zone/Zone';

import { AtBat, Coordinates, PitchPlay } from '@typings/atbat';

import { adjustXCoordinate, adjustYCoordinate } from '@utils/pitch';

interface StrikeZoneProps {
    atbats: AtBat[];
    plotType: 'zone' | 'heatmap';
    width: number;
    height: number;
    radius: number;
}

const StrikeZone = ({ atbats, plotType, width, height, radius = 24 }: StrikeZoneProps) => {
    const yScale = d3.scaleLinear().domain([0.5, 4.5]).range([height, 0]);
    const xScale = d3.scaleLinear().domain([-1.5, 1.5]).range([0, width]);

    // const outcomes = [...new Set(atbats.flatMap((atbat) => atbat.plays.map((play) => play.outcomeCode)))];
    // const outcomeDescs = [...new Set(atbats.flatMap((atbat) => atbat.plays.map((play) => play.outcomeDescription)))];
    //
    // console.log(outcomes);
    // console.log(outcomeDescs);

    const scaledPlays: PitchPlay[] = atbats.flatMap((atbat) => {
        const inning = atbat.inning;
        const isTopInning = atbat.isTopInning;
        const atBatIndex = atbat.atBatIndex;
        const batter = atbat.batter.name;
        const pitcher = atbat.pitcher.name;

        return atbat.plays.map((play) => {
            const { coordinates, strikeZoneTop, strikeZoneBottom } = play;
            const adjustedCoordinates = {
                x: xScale(adjustXCoordinate(coordinates.x)),
                y: yScale(adjustYCoordinate(coordinates.y, strikeZoneBottom, strikeZoneTop)),
            };
            return {
                ...play,
                inning,
                isTopInning,
                atBatIndex,
                batter,
                pitcher,
                coordinates: adjustedCoordinates,
            };
        });
    });

    const coordinateList: Coordinates[] = atbats.flatMap((atbat) => {
        return atbat.plays
            .filter((play) => play.outcomeCode === 'C')
            .map((play) => {
                const { coordinates, strikeZoneTop, strikeZoneBottom } = play;

                return {
                    x: xScale(adjustXCoordinate(coordinates.x)),
                    y: yScale(adjustYCoordinate(coordinates.y, strikeZoneBottom, strikeZoneTop)),
                };
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
                        scaledPlays.map((play) => <Pitch key={play.id} play={play} radius={radius} />)
                    ) : (
                        <HeatMap coordinatesList={coordinateList} width={width} height={height} />
                    )}
                </g>
            </svg>
        </StrikeZoneContainer>
    );
};

export default StrikeZone;

//https://www.react-graph-gallery.com/scatter-plot
