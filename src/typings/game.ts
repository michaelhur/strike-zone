import { Team } from '@typings/team';
import { Umpire } from '@typings/umpire';

export interface Game {
    id: number;
    slug: string;
    date: string;
    season: number;
    awayId?: number;
    homeId?: number;
    umpireId?: number;
    away?: Team;
    home?: Team;
    umpire?: Umpire | null;
    isFinal: boolean | null;
    isPostponed?: boolean | null;
    initialDate?: string;
    homeScore?: number | null;
    awayScore?: number | null;
}
