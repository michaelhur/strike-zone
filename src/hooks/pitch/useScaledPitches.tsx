import { AtBat, PitchPlay } from '@typings/atbat';

import { computeAdjustedCoordinates } from '@utils/pitch';

export const useScaledPitches = (atbats: AtBat[]): PitchPlay[] => {
    return atbats.flatMap((atbat) => {
        const { inning, isTopInning, atBatIndex, batter, pitcher, home, away } = atbat;

        return atbat.plays.map((play) => {
            const { coordinates, strikeZoneBottom, strikeZoneTop } = play;
            const adjustedCoordinates = computeAdjustedCoordinates(coordinates, strikeZoneBottom, strikeZoneTop);

            return {
                ...play,
                inning,
                isTopInning,
                atBatIndex,
                batter,
                pitcher,
                home,
                away,
                coordinates: adjustedCoordinates,
            };
        });
    });
};
