import { AtBat } from '@typings/atbat';

export const useAtbatBySide = (atbats: AtBat[], teamId: number): AtBat[][] => {
    const pitchingData = atbats.filter((atbat) => {
        return (atbat.home.id === teamId && !atbat.isTopInning) || (atbat.away.id === teamId && atbat.isTopInning);
    });

    const battingData = atbats.filter((atbat) => {
        return (atbat.home.id === teamId && atbat.isTopInning) || (atbat.away.id === teamId && !atbat.isTopInning);
    });

    return [pitchingData, battingData];
};
