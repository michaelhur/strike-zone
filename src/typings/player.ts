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
    'L' = '좌',
    'R' = '우',
    'S' = '스위치',
}

export enum PitchHandEnum {
    'L' = '좌완',
    'R' = '우완',
}

export enum BatSideEnum {
    'L' = '좌타',
    'R' = '우타',
    'S' = '스위치',
}

export enum PositionEnum {
    'P' = '투수',
    'C' = '포수',
    '1B' = '1루수',
    '2B' = '2루수',
    '3B' = '3루수',
    'SS' = '유격수',
    'LF' = '좌익수',
    'CF' = '중견수',
    'RF' = '우익수',
    'DH' = '지명타자',
    'Y' = '이도류',
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
