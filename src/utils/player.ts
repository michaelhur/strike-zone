import { AnyOBJ } from '@src/typings';

export const extractPlayerStats = (data: AnyOBJ) => {
    const people = data.people;
    const person = people[0];
    const stats = person.stats;

    const pitchingData = stats.find((stat) => stat.group.displayName === 'pitching');
    const pitchingSplits = pitchingData.splits[0];
    const pitchingStats = pitchingSplits.stat;
    const {
        gamesPlayed,
        era,
        wins,
        losses,
        saves,
        holds,
        outs,
        strikes,
        balls,
        whip,
        inningsPitched,
        strikeOuts,
        baseOnBalls,
    } = pitchingStats;

    return {
        gamesPlayed,
        era,
        wins,
        losses,
        saves,
        holds,
        outs,
        strikes,
        balls,
        whip,
        inningsPitched,
        strikeOuts,
        baseOnBalls,
    };
};

export const capitalizeName = (name: string): string => {
    return name.charAt(0).toUpperCase() + name.slice(1);
};
