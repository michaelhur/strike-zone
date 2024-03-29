import { Player } from '@typings/player';

export const usePlayerPositionType = (players: Player[]) => {
    const pitchers = players.filter((player) => player.positionType === 'Pitcher');
    const catchers = players.filter((player) => player.positionType === 'Catcher');
    const infielders = players.filter((player) => player.positionType === 'Infielder');
    const outfielders = players.filter((player) => player.positionType === 'Outfielder');
    const hitters = players.filter((player) => player.positionType === 'Hitter');
    const twp = players.filter((player) => player.positionType === 'Two-Way Player');

    return [pitchers, catchers, infielders, outfielders, hitters, twp];
};
