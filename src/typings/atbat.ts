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

interface PlayerMatchup {
    batter: Player;
    pitcher: Player;
}

interface TeamMatchup {
    home: Team;
    away: Team;
}

export interface AtBat {
    id: string;
    gameId: number | string;
    atBatIndex: number;
    isTopInning: boolean;
    inning: number;
    playerMatchup: PlayerMatchup;
    teamMatchup: TeamMatchup;
    umpire: Umpire;
    plays: Play[];
}

export interface UpsertAtBat {
    id: string;
    gameId: number;
    atBatIndex: number;
    isTopInning: boolean;
    inning: number;
    batterId: number;
    pitcherId: number;
    homeId: number;
    awayId: number;
    umpireId: number;
    plays: Play[];
    gameDate: string;
}
