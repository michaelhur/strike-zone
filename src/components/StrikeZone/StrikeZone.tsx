import { StrikeZoneDimensions } from '@constants/pitch';
import * as d3 from 'd3';

import { StrikeZoneContainer } from '@components/StrikeZone/StrikeZone.styles';
import { Pitch } from '@components/StrikeZone/components/Pitch/Pitch';
import { Zone } from '@components/StrikeZone/components/Zone/Zone';

import { AtBat, Coordinates, PitchPlay, Play } from '@typings/atbat';

interface StrikeZoneProps {
    width: number;
    height: number;
    atbats: AtBat[];
    radius: number;
}

const StrikeZone = ({ width, height, atbats, radius = 24 }: StrikeZoneProps) => {
    const yScale = d3.scaleLinear().domain([0.5, 4.5]).range([height, 0]);
    const xScale = d3.scaleLinear().domain([-1.5, 1.5]).range([0, width]);

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
                    {scaledPlays.map((play) => (
                        <Pitch key={play.id} play={play} radius={radius} />
                    ))}
                </g>
            </svg>
        </StrikeZoneContainer>
    );
};

export default StrikeZone;

//https://www.react-graph-gallery.com/scatter-plot
