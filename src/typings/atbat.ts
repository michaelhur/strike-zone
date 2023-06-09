import { PitchType } from '@constants/pitch';

import { Player } from '@typings/player';
import { Team } from '@typings/team';
import { Umpire } from '@typings/umpire';

// 좌표
interface Coordinates {
    x: number;
    y: number;
}

// 투구
export interface Play {
    id: string;
    isPitch: boolean;
    pitchType: keyof typeof PitchType;
    velocity: number;
    isBall: boolean;
    isStrike: boolean;
    isInPlay: boolean;
    strikeZoneTop: number;
    strikeZoneBottom: number;
    coordinates: Coordinates;
}

export interface AtBat {
    id: string;
    atBatIndex: number;
    isTopInning: boolean;
    inning: number;
    game: Game;
    batter: Player;
    pitcher: Player;
    home: Team;
    away: Team;
    umpire: Umpire;
    plays: Play[];
}

export interface UpsertAtBat {
    id: string;
    game: number;
    atBatIndex: number;
    isTopInning: boolean;
    inning: number;
    batterId: number;
    pitcherId: number;
    homeId: number;
    awayId: number;
    umpireId: number;
    plays: Play[];
    date: string;
}

export interface Game {
    id: number;
    slug: string;
    date: string;
    season: number;
    awayId: number;
    homeId: number;
    umpireId: number;
}
