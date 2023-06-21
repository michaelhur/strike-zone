export type PlayerSide = 'L' | 'R' | 'S';

export type PositionType = 'ALL' | 'Pitcher' | 'Infielder' | 'Outfielder' | 'Hitter' | 'Two-Way Player';

export enum PlayerSideEnum {
    'L' = 'Left',
    'R' = 'Right',
    'S' = 'Switch',
}

export enum PositionEnum {
    'P' = 'Pitcher',
    'C' = 'Catcher',
    '1B' = 'First Baseman',
    '2B' = 'Second Baseman',
    '3B' = 'Third Baseman',
    'SS' = 'Shortstop',
    'LF' = 'Left Fielder',
    'CF' = 'Center Fielder',
    'RF' = 'Right Fielder',
    'DH' = 'Designated Hitter',
    'Y' = 'Two-Way Player',
}

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
