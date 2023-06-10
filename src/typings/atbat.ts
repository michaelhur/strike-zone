import { PitchType } from '@constants/pitch';

import { Game } from '@typings/game';
import { Player } from '@typings/player';
import { Team } from '@typings/team';
import { Umpire } from '@typings/umpire';

interface Coordinates {
    x: number;
    y: number;
}

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
    date: string;
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
