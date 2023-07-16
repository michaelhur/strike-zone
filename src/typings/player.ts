import { Team } from '@typings/team';

export type PlayerSide = 'L' | 'R' | 'S';

export type PositionType = 'ALL' | 'Pitcher' | 'Catcher' | 'Infielder' | 'Outfielder' | 'Hitter' | 'Two-Way Player';

export enum PositionTypeEnum {
    ALL = '전체',
    Pitcher = '투수',
    Catcher = '포수',
    Infielder = '내야수',
    Outfielder = '외야수',
    Hitter = '지명타자',
    'Two-Way Player' = '오타니',
}

export enum PlayerSideEnum {
    'L' = 'Left',
    'R' = 'Right',
    'S' = 'Switch',
}

export enum PitchHandEnum {
    'L' = 'LHP',
    'R' = 'RHP',
}

export enum BatSideEnum {
    'L' = 'LHB',
    'R' = 'RHB',
    'S' = 'Switch Hitter',
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
    positionType: PositionType;
    height: string;
    weight: number;
    slug: string;
    playerNumber: number;
    teamId?: number | null;
    team?: Team | null;
}

export interface PitchingStats {
    baseOnBalls: number;
    balls: number;
    era: number;
    gamesPlayed: number;
    holds: number;
    inningsPitched: number;
    losses: number;
    outs: number;
    saves: number;
    strikes: number;
    strikeOuts: number;
    whip: number;
    wins: number;
}

export interface BattingStats {
    avg: number;
    baseOnBalls: number;
    gamesPlayed: number;
    hits: number;
    homeRuns: number;
    obp: number;
    ops: number;
    rbi: number;
    slg: number;
    strikeOuts: number;
}

export interface PlayerStats {
    pitchingStats: PitchingStats;
    battingStats: BattingStats;
    positionCode: string;
}

export interface SidePlotValueProps {
    pitchHand: PlayerSide;
    batSide: PlayerSide;
    zoneLabel: string;
}

export interface PitcherPlotValueProps {
    batSide: PlayerSide;
    zoneLabel: string;
}

export interface BatterPlotValueProps {
    pitchHand: PlayerSide;
    zoneLabel: string;
}
