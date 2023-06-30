import { contourDensity } from 'd3';
import * as d3 from 'd3';

import { PitchPlay } from '@typings/atbat';

interface HeatMapProps {
    pitchList: PitchPlay[];
}

export const HeatMap = ({ pitchList }: HeatMapProps) => {
    const data: [number, number][] = pitchList
        .map((pitch) => pitch.coordinates)
        .map((coordinate) => [coordinate.x, coordinate.y]);

    const contours = contourDensity()
        .x((d) => d[0])
        .y((d) => d[1])
        .bandwidth(5)(data);

    return (
        <svg>
            {contours.map((contour, i) => (
                <path key={i} d={d3.geoPath()(contour) as string} fill={'var(--primary500)'} opacity={0.3} />
            ))}
        </svg>
    );
};
