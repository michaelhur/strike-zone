export interface League {
    id: number;
    name: string;
    shortName: string;
}

export interface Division {
    id: number;
    name: string;
    shortName: string;
    abbreviation: string;
}

export const Leagues: League[] = [
    {
        id: 103,
        name: 'American League',
        shortName: 'AL',
    },
    {
        id: 104,
        name: 'National League',
        shortName: 'NL',
    },
];

export const Divisions: Division[] = [
    {
        id: 200,
        name: 'American League West',
        shortName: 'AL West',
        abbreviation: 'ALW',
    },
    {
        id: 201,
        name: 'American League East',
        shortName: 'AL East',
        abbreviation: 'ALE',
    },
    {
        id: 202,
        name: 'American League Central',
        shortName: 'AL Central',
        abbreviation: 'ALC',
    },
    {
        id: 203,
        name: 'National League West',
        shortName: 'NL West',
        abbreviation: 'NLW',
    },
    {
        id: 204,
        name: 'National League East',
        shortName: 'NL East',
        abbreviation: 'NLE',
    },
    {
        id: 205,
        name: 'National League Central',
        shortName: 'NL Central',
        abbreviation: 'NLC',
    },
];
