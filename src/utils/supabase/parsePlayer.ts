import axios, { AxiosRequestConfig } from 'axios';

import { Player } from '@typings/player';

const MLB_URL = import.meta.env.MLB_BASE_URL;
const SUPABASE_BASE_URL = import.meta.env.SUPABASE_BASE_URL;
const SUPABASE_KEY = import.meta.env.SUPABASE_KEY;

const getPlayers = async () => {
    const teamData = await axios(`${MLB_URL}/api/v1/teams?sportId=1`);
    const teamResponse = teamData.data;
    const teams = teamResponse.teams;
    const teamIds = teams.map((team) => team.id);

    for await (const teamId of teamIds) {
        const players: Player[] = [];

        const mlbData = await axios(`${MLB_URL}/api/v1/teams/${teamId}/roster?rosterType=fullRoster`);
        const data = mlbData.data;
        const roster = data.roster;

        for await (const player of roster) {
            const person = player.person;
            const playerId = person.id;
            const name = person.fullName;

            const personData = await axios(`${MLB_URL}/api/v1/people/${playerId}`);
            const personDataResponse = personData.data;
            const profile = personDataResponse.people[0];
            const lastName = profile.lastName;
            const batSide = profile.batSide.code;
            const pitchSide = profile.pitchHand.code;

            const body = {
                id: playerId,
                name,
                lastName,
                batSide,
                pitchSide,
                teamId,
            };

            players.push(body);
        }
    }

    return;
};

const fetchPlayer = async (players: Player[]) => {
    try {
        const HEADER = {
            'Content-Type': 'application/json',
            apikey: SUPABASE_KEY,
            Authorization: `Bearer ${SUPABASE_KEY}`,
            Prefer: 'resolution=merge-duplicates',
        };

        const fetchOptions = {
            method: 'POST',
            url: `${SUPABASE_BASE_URL}/player`,
            headers: HEADER,
            data: JSON.stringify(players),
        };

        const res = await axios(fetchOptions);
        return res;
    } catch (e) {
        console.log(`fetch Player failed with ${e}`);
    }
};
