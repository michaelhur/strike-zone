import * as d3 from 'd3';

import { LogoIcon } from '@components/@shared/Icon';
import { StrikeZoneContainer } from '@components/StrikeZone/StrikeZone.styles';
import { Pitch } from '@components/StrikeZone/components/Pitch/Pitch';
import { Zone } from '@components/StrikeZone/components/Zone/Zone';

import { Coordinates } from '@typings/atbat';

interface StrikeZoneProps {
    width: number;
    height: number;
    coordinateList: Coordinates[];
    radius: number;
}

const MARGIN = { top: 16, right: 16, bottom: 16, left: 16 };

const StrikeZone = ({ width, height, coordinateList, radius = 24 }: StrikeZoneProps) => {
    const boundsWidth = width - MARGIN.right - MARGIN.left;
    const boundsHeight = height - MARGIN.top - MARGIN.bottom;

    // Scales
    const yScale = d3.scaleLinear().domain([0.5, 4.5]).range([boundsHeight, 0]);
    const xScale = d3.scaleLinear().domain([-1.5, 1.5]).range([0, boundsWidth]);

    const scaledCoordinateList = coordinateList.map((coordinate) => {
        return {
            x: xScale(coordinate.x),
            y: yScale(coordinate.y),
        };
    });

    return (
        <StrikeZoneContainer>
            <svg width={width} height={height}>
                <g
                    width={boundsWidth}
                    height={boundsHeight}
                    transform={`translate(${[MARGIN.left, MARGIN.top].join(',')})`}
                >
                    <g transform={`translate(${xScale(-0.85)},0)`}>
                        <Zone
                            xMin={xScale(-0.85)}
                            xMax={xScale(0.85)}
                            yMin={yScale(1.5)}
                            yMax={yScale(3.5)}
                            stroke="var(--grey700)"
                            fill="None"
                        />
                    </g>
                    {scaledCoordinateList.map((coordinate, i) => (
                        <Pitch key={i} coordinates={coordinate} radius={24} />
                    ))}
                </g>
            </svg>
        </StrikeZoneContainer>
    );
};

export default StrikeZone;

//https://www.react-graph-gallery.com/scatter-plot
