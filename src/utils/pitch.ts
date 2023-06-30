import { StrikeZoneDimensions } from '@constants/pitch';

export const adjustYCoordinate = (y: number, strikeZoneBottom: number, strikeZoneTop: number): number => {
    if (y <= 0.5) return 0.5;
    if (y >= 4.5) return 4.5;

    if (y >= strikeZoneTop) {
        const diff = y - strikeZoneTop;
        return StrikeZoneDimensions.TOP + diff;
    }

    if (y <= strikeZoneBottom) {
        const diff = strikeZoneBottom - y;
        return StrikeZoneDimensions.BOTTOM - diff;
    }

    const topDiff = strikeZoneTop - y;
    const bottomDiff = y - strikeZoneBottom;

    if (topDiff < bottomDiff) return StrikeZoneDimensions.TOP - topDiff;
    else return StrikeZoneDimensions.BOTTOM + bottomDiff;
};

export const adjustXCoordinate = (x: number): number => {
    if (x <= -1.5) return -1.5;
    if (x >= 1.5) return 1.5;

    return x;
};
