export type PlayerSide = 'L' | 'R' | 'S';

export interface Player {
    id: number;
    name: string;
    lastName: string;
    batSide: PlayerSide;
    pitchHand: PlayerSide;
}

export type UpsertPlayer = Player;

export const Minter: Player = {
    id: 621345,
    name: 'A. J. Minter',
    lastName: 'Minter',
    batSide: 'L',
    pitchHand: 'L',
};
