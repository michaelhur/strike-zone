import * as d3 from 'd3';

import { XAxis } from '@components/StrikeZone/components/XAxis/XAxis';
import { YAxis } from '@components/StrikeZone/components/YAxis/YAxis';
import { Zone } from '@components/StrikeZone/components/Zone/Zone';

import { Coordinates } from '@typings/atbat';

interface StrikeZoneProps {
    width: number;
    height: number;
    coordinates: Coordinates[];
}

const MARGIN = { top: 16, right: 16, bottom: 16, left: 16 };

const StrikeZone = ({ width, height, coordinates }: StrikeZoneProps) => {
    const boundsWidth = width - MARGIN.right - MARGIN.left;
    const boundsHeight = height - MARGIN.top - MARGIN.bottom;

    // Scales
    const yScale = d3.scaleLinear().domain([0.5, 4.5]).range([boundsHeight, 0]);
    const xScale = d3.scaleLinear().domain([-1.5, 1.5]).range([0, boundsWidth]);

    // Build the shapes
    const allShapes = coordinates.map((d, i) => {
        return (
            <circle
                key={i}
                r={16}
                cx={xScale(d.x)}
                cy={yScale(d.y)}
                opacity={1}
                stroke="#cb1dd1"
                fill="#cb1dd1"
                fillOpacity={0.3}
                strokeWidth={1}
            />
        );
    });

    return (
        <div>
            <svg width={width} height={height}>
                <g
                    width={boundsWidth}
                    height={boundsHeight}
                    transform={`translate(${[MARGIN.left, MARGIN.top].join(',')})`}
                >
                    <YAxis yScale={yScale} pixelsPerTick={40} width={boundsWidth} />
                    <g transform={`translate(0, ${boundsHeight})`}>
                        <XAxis xScale={xScale} pixelsPerTick={40} height={boundsHeight} />
                    </g>
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
                    {allShapes}
                </g>
            </svg>
        </div>
    );
};

export default StrikeZone;

//https://www.react-graph-gallery.com/scatter-plot
