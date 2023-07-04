import { AtBat, OutcomeType, PitchPlay, SideType } from '@typings/atbat';
import { PlayerSide } from '@typings/player';

import { computeAdjustedCoordinates } from '@utils/pitch';

export const useScaledPitches = (
    atbats: AtBat[],
    outcomeType?: OutcomeType,
    sideType?: SideType,
    batSide?: PlayerSide,
    pitchHand?: PlayerSide,
    inningType?: number,
): PitchPlay[] => {
    return atbats
        .filter((atbat) => {
            const { isTopInning, inning, batter, pitcher } = atbat;
            const battingSide = batter.batSide;
            const pitchingHand = pitcher.pitchHand;

            const sideFilter =
                !sideType || sideType === 'All' ? true : sideType === 'Home' ? !isTopInning : isTopInning;
            const inningFilter = !inningType ? true : inning === inningType;
            const batFilter = !batSide ? true : battingSide === batSide;
            const pitchFilter = !pitchHand ? true : pitchingHand === pitchHand;

            return sideFilter && inningFilter && batFilter && pitchFilter;
        })
        .flatMap((atbat) => {
            const { inning, isTopInning, atBatIndex, batter, pitcher, home, away } = atbat;

            return atbat.plays
                .filter((play) => {
                    const { outcomeCode } = play;
                    switch (outcomeType) {
                        case 'InPlay':
                            return !['C', 'S', 'F', 'B', '*B'].includes(outcomeCode);
                        case 'BallsAndStrikes':
                            return outcomeCode === 'C' || outcomeCode === 'B' || outcomeCode === '*B';
                        case 'CalledStrike':
                            return outcomeCode === 'C';
                        case 'Ball':
                            return outcomeCode === 'B' || outcomeCode === '*B';
                        case 'Foul':
                            return outcomeCode === 'F';
                        case 'SwingingStrike':
                            return outcomeCode === 'S';
                        default:
                            return true;
                    }
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
