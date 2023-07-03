import { AtBat, OutcomeType, PitchPlay, SideType } from '@typings/atbat';

import { computeAdjustedCoordinates } from '@utils/pitch';

export const useScaledPitches = (
    atbats: AtBat[],
    outcomeType: OutcomeType,
    sideType: SideType,
    inningType?: number,
): PitchPlay[] => {
    return atbats
        .filter((atbat) => {
            const { isTopInning, inning } = atbat;
            const sideFilter = sideType === 'All' ? true : sideType === 'Home' ? !isTopInning : isTopInning;
            const inningFilter = !inningType ? true : inning === inningType;

            return sideFilter && inningFilter;
        })
        .flatMap((atbat) => {
            const { inning, isTopInning, atBatIndex, batter, pitcher, home, away } = atbat;

            return atbat.plays
                .filter((play) => {
                    const { outcomeCode } = play;
                    return outcomeType === 'All'
                        ? outcomeCode === 'C' || outcomeCode === 'B' || outcomeCode === '*B'
                        : outcomeType === 'CalledStrike'
                        ? outcomeCode === 'C'
                        : outcomeCode === 'B' || outcomeCode === '*B';
                })
                .map((play) => {
                    const { coordinates, strikeZoneBottom, strikeZoneTop } = play;
                    const adjustedCoordinates = computeAdjustedCoordinates(
                        coordinates,
                        strikeZoneBottom,
                        strikeZoneTop,
                    );

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
