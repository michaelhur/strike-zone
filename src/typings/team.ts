export interface Team {
    id: number;
    name: string;
    abbreviation: string;
    franchiseName: string;
    teamName: string;
    imageUrl: string;
    leagueId: number;
    divisionId: number;
}

export const Toronto: Team = {
    id: 141,
    name: 'Toronto Blue Jays',
    abbreviation: 'TOR',
    franchiseName: 'Toronto',
    teamName: 'Blue Jays',
    imageUrl: '',
    leagueId: 103,
    divisionId: 201,
};
