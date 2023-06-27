import { contourDensity } from 'd3';
import * as d3 from 'd3';

import { Coordinates } from '@typings/atbat';

interface HeatMapProps {
    coordinatesList: Coordinates[];
    width: number;
    height: number;
}

export const HeatMap = ({ coordinatesList, width, height }: HeatMapProps) => {
    const data: [number, number][] = coordinatesList.map((coordinate) => [coordinate.x, coordinate.y]);

    const contours = contourDensity()
        .x((d) => d[0])
        .y((d) => d[1])
        .size([width, height])
        .bandwidth(4)(data);

    const colorScale = d3
        .scaleSequential((t) => d3.interpolate(`var(--white)`, `var(--primary500)`)(t))
        .domain(d3.extent(contours, (d) => d.value) as [number, number]);

    console.log('contours', contours);
    return (
        <svg>
            {contours.map((contour, i) => (
                <path
                    key={i}
                    d={d3.geoPath()(contour) as string}
                    fill={colorScale(contour.value) as string}
                    stroke="black"
                />
            ))}
        </svg>
    );
};
