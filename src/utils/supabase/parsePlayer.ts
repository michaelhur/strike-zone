import axios, { AxiosRequestConfig } from 'axios';

import { Player } from '@typings/player';

const MLB_URL = import.meta.env.MLB_BASE_URL;
const SUPABASE_BASE_URL = import.meta.env.SUPABASE_BASE_URL;
const SUPABASE_KEY = import.meta.env.SUPABASE_KEY;

const getPlayers = async () => {
    const players: Player[] = [];

    const teamData = await axios(`${MLB_URL}/api/v1/teams?sportId=1`);
    const teamResponse = await teamData.data;
    const teams = await teamResponse.teams;
    const teamIds = await teams.map((team) => team.id);

    for await (const teamId of teamIds) {
        const mlbData = await axios(`${MLB_URL}/api/v1/teams/${teamId}/roster`);
        const data = await mlbData.data;
        const roster = await data.roster;

        for await (const player of roster) {
            const person = await player.person;
            const playerId = await person.id;
            const name = await person.fullName;

            const personData = await axios(`${MLB_URL}/api/v1/people/${playerId}`);
            const personDataResponse = await personData.data;
            const profile = await personDataResponse.people[0];
            const lastName = await profile.lastName;
            const batSide = await profile.batSide.code;
            const pitchSide = await profile.pitchHand.code;

            const body = await {
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

    console.log(players);

    return players;
};

const fetchPlayer = async () => {
    const players = await getPlayers();

    const HEADER = {
        'Content-Type': 'application/json',
        apikey: SUPABASE_KEY,
        Authorization: `Bearer ${SUPABASE_KEY}`,
    };

    const fetchOptions = {
        method: 'POST',
        url: `${SUPABASE_BASE_URL}/player`,
        headers: HEADER,
        data: JSON.stringify(players),
    };

    const res = await axios(fetchOptions);
    return res;
};

console.log(fetchPlayer());
