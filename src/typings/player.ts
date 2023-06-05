export type PlayerSide = 'L' | 'R' | 'S';

export interface Player {
    id: number | string;
    name: string;
    lastName: string;
    batSide: PlayerSide;
    pitchSide: PlayerSide;
    teamId: number | string;
}

export const Minter: Player = {
    id: 621345,
    name: 'A. J. Minter',
    lastName: 'Minter',
    batSide: 'L',
    pitchSide: 'L',
    teamId: 144,
};
