import { LogoIcon } from '@components/@shared/Icon';

import { Coordinates } from '@typings/atbat';

interface PitchProps {
    coordinates: Coordinates;
    radius: number;
}

export const Pitch = ({ coordinates, radius }: PitchProps) => {
    return (
        <g transform={`translate(${coordinates.x - radius / 2}, ${coordinates.y - radius / 2})`}>
            <LogoIcon size={radius} opacity={0.8} hoverable={true} />;
        </g>
    );
};
