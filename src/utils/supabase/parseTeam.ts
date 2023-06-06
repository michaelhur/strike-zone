import axios, { AxiosRequestConfig } from 'axios';

import { Team } from '@typings/team';

const MLB_URL = import.meta.env.MLB_BASE_URL;
const SUPABASE_BASE_URL = import.meta.env.SUPABASE_BASE_URL;
const SUPABASE_KEY = import.meta.env.SUPABASE_KEY;

const fetchTeam = async () => {
    const teams: Team[] = [];

    const mlbData = await axios(`${MLB_URL}/api/v1/teams?sportId=1`);
    const data = mlbData.data;
    const teamData = data.teams;

    for await (const team of teamData) {
        const body: Team = {
            id: team.id,
            name: team.name,
            abbreviation: team.abbreviation,
            franchiseName: team.franchiseName,
            imageUrl: '',
            teamName: team.teamName,
            leagueId: team.league.id,
            divisionId: team.division.id,
        };
        teams.push(body);
    }

    const HEADER = {
        'Content-Type': 'application/json',
        apikey: SUPABASE_KEY,
        Authorization: `Bearer ${SUPABASE_KEY}`,
        Prefer: 'resolution=merge-duplicates',
    };

    const fetchOptions: AxiosRequestConfig = {
        method: 'POST',
        url: `${SUPABASE_BASE_URL}/team`,
        headers: HEADER,
        data: JSON.stringify(teams),
    };

    const res = await axios(fetchOptions);
    return res;
};
