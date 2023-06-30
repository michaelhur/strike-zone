import { contourDensity } from 'd3';
import * as d3 from 'd3';

import { Coordinates } from '@typings/atbat';

interface HeatMapProps {
    coordinatesList: Coordinates[];
}

export const HeatMap = ({ coordinatesList }: HeatMapProps) => {
    const data: [number, number][] = coordinatesList.map((coordinate) => [coordinate.x, coordinate.y]);

    const contours = contourDensity()
        .x((d) => d[0])
        .y((d) => d[1])
        .bandwidth(10)(data);

    return (
        <svg>
            {contours.map((contour, i) => (
                <path key={i} d={d3.geoPath()(contour) as string} fill={'var(--primary500)'} opacity={0.3} />
            ))}
        </svg>
    );
};
