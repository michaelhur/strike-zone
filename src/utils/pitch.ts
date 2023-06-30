import { StrikeZoneDimensions, xScale, yScale } from '@constants/pitch';

import { Coordinates } from '@typings/atbat';

const adjustYCoordinate = (y: number, strikeZoneBottom: number, strikeZoneTop: number): number => {
    if (y <= 0.5) return 0.5;
    if (y >= 4.5) return 4.5;

    const diff = y >= strikeZoneTop ? y - strikeZoneTop : strikeZoneBottom - y;

    if (y >= strikeZoneTop) return StrikeZoneDimensions.TOP + diff;
    if (y <= strikeZoneBottom) return StrikeZoneDimensions.BOTTOM - diff;

    const topDiff = strikeZoneTop - y;
    const bottomDiff = y - strikeZoneBottom;

    if (topDiff < bottomDiff) return StrikeZoneDimensions.TOP - topDiff;
    else return StrikeZoneDimensions.BOTTOM + bottomDiff;
};

const adjustXCoordinate = (x: number): number => {
    if (x <= -1.5) return -1.5;
    if (x >= 1.5) return 1.5;

    return x;
};

export const computeAdjustedCoordinates = (
    coordinates: Coordinates,
    strikeZoneBottom: number,
    strikeZoneTop: number,
): Coordinates => {
    return {
        x: xScale(adjustXCoordinate(coordinates.x)),
        y: yScale(adjustYCoordinate(coordinates.y, strikeZoneBottom, strikeZoneTop)),
    };
};
