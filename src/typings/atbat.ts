import { PitchType } from '@constants/pitch';

import { Player } from '@typings/player';
import { Team } from '@typings/team';
import { Umpire } from '@typings/umpire';

// 투구 결과
interface PitchDecision {
    pitchType: keyof typeof PitchType;
    velocity: number;
    isBall: boolean;
    isStrike: boolean;
    isInPlay: boolean;
}

// 좌표
interface Coordinates {
    x: number;
    y: number;
}

// 투구 데이터
interface PitchData {
    strikeZoneTop: number;
    strikeZoneBottom: number;
    coordinates: Coordinates;
}

// 투구
export interface Play {
    id: string;
    isPitch: boolean;
    decision?: PitchDecision;
    pitchData?: PitchData;
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
    id: number | string;
    gameId: number | string;
    atBatIndex: number;
    isTopInning: boolean;
    inning: number;
    playerMatchup: PlayerMatchup;
    teamMatchup: TeamMatchup;
    umpire: Umpire;
    plays: Play[];
}
