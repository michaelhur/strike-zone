import { StrikeZoneDimensions } from '@constants/pitch';
import * as d3 from 'd3';

import { StrikeZoneContainer } from '@components/StrikeZone/StrikeZone.styles';
import { Pitch } from '@components/StrikeZone/components/Pitch/Pitch';
import { Zone } from '@components/StrikeZone/components/Zone/Zone';

import { Coordinates, Play } from '@typings/atbat';

interface StrikeZoneProps {
    width: number;
    height: number;
    plays: Play[];
    radius: number;
}

const StrikeZone = ({ width, height, plays, radius = 24 }: StrikeZoneProps) => {
    const yScale = d3.scaleLinear().domain([0.5, 4.5]).range([height, 0]);
    const xScale = d3.scaleLinear().domain([-1.5, 1.5]).range([0, width]);

    const scaledCoordinateList: Coordinates[] = plays.map((play) => {
        return {
            x: xScale(play.coordinates.x),
            y: yScale(play.coordinates.y),
        };
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
                    {scaledCoordinateList.map((coordinate, i) => (
                        <Pitch key={i} coordinates={coordinate} radius={radius} />
                    ))}
                </g>
            </svg>
        </StrikeZoneContainer>
    );
};

export default StrikeZone;

//https://www.react-graph-gallery.com/scatter-plot
