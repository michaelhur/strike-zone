import { StrikeZoneDimensions } from '@constants/pitch';
import * as d3 from 'd3';

import { StrikeZoneContainer } from '@components/StrikeZone/StrikeZone.styles';
import { HeatMap } from '@components/StrikeZone/components/HeatMap/HeatMap';
import { Pitch } from '@components/StrikeZone/components/Pitch/Pitch';
import { Zone } from '@components/StrikeZone/components/Zone/Zone';

import { AtBat, Coordinates, PitchPlay } from '@typings/atbat';

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
            const coordinates = {
                x: xScale(play.coordinates.x),
                y: yScale(play.coordinates.y),
            };
            return {
                ...play,
                inning,
                isTopInning,
                atBatIndex,
                batter,
                pitcher,
                coordinates,
            };
        });
    });

    const coordinateList: Coordinates[] = atbats.flatMap((atbat) => {
        return atbat.plays
            .filter((play) => play.outcomeCode === 'C')
            .map((play) => {
                return {
                    x: xScale(play.coordinates.x),
                    y: yScale(play.coordinates.y),
                };
            });
    });

    return (
        <StrikeZoneContainer>
            <svg width={width} height={height}>
                <g width={width} height={height}>
                    <g transform={`translate(${xScale(StrikeZoneDimensions.left)},0)`}>
                        <Zone
                            xMin={xScale(StrikeZoneDimensions.left)}
                            xMax={xScale(StrikeZoneDimensions.right)}
                            yMin={yScale(StrikeZoneDimensions.bottom)}
                            yMax={yScale(StrikeZoneDimensions.top)}
                            stroke="var(--grey700)"
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
