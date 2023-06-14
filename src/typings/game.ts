import { Team } from '@typings/team';
import { Umpire } from '@typings/umpire';

export interface Game {
    id: number;
    slug: string;
    date: string;
    season: number;
    isFinal: boolean;
    isPostponed: boolean;
    initialDate: string;
    homeScore: number | null;
    awayScore: number | null;
    awayId?: number;
    homeId?: number;
    umpireId?: number;
    away?: Team;
    home?: Team;
    umpire?: Umpire | null;
}
