export interface Team {
    id: number | string;
    name: string;
    abbreviation: string;
    franchiseName: string;
    teamName: string;
    imageUrl: string;
    leagueId: number | string;
    divisionId: number | string;
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
