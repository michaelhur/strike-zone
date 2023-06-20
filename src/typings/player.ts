export type PlayerSide = 'L' | 'R' | 'S';

export enum PlayerSideEnum {
    'L' = 'Left',
    'R' = 'Right',
    'S' = 'Switch',
}

export enum PositionEnum {}

export interface Player {
    id: number;
    name: string;
    lastName: string;
    batSide: PlayerSide;
    pitchHand: PlayerSide;
    positionCode: string;
    positionType: string;
    height: string;
    weight: number;
}
