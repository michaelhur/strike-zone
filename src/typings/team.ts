import { Division } from '@typings/division';
import { League } from '@typings/league';

export interface Team {
    id: number;
    name: string;
    abbreviation: string;
    franchiseName: string;
    teamName: string;
    imageUrl: string;
    leagueId?: number;
    divisionId?: number;
    league?: League;
    division?: Division;
}
