export type PlayerSide = 'L' | 'R' | 'S';

export interface Player {
    id: number;
    name: string;
    lastName: string;
    batSide: PlayerSide;
    pitchHand: PlayerSide;
}
