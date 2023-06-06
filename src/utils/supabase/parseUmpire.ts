import axios, { AxiosRequestConfig } from 'axios';

import { Umpire } from '@typings/umpire';

const MLB_URL = import.meta.env.MLB_BASE_URL;
const SUPABASE_BASE_URL = import.meta.env.SUPABASE_BASE_URL;
const SUPABASE_KEY = import.meta.env.SUPABASE_KEY;

const fetchUmpire = async () => {
    const umpires: Umpire[] = [];

    const mlbData = await axios(`${MLB_URL}/api/v1/jobs/umpires`);
    const data = mlbData.data;
    const roster = data.roster;

    for await (const u of roster) {
        const person = await u.person;
        umpires.push({ id: person.id, name: person.fullName });
    }

    const HEADER = {
        'Content-Type': 'application/json',
        apikey: SUPABASE_KEY,
        Authorization: `Bearer ${SUPABASE_KEY}`,
        Prefer: 'resolution=merge-duplicates',
    };

    const fetchOptions: AxiosRequestConfig = {
        method: 'POST',
        url: `${SUPABASE_BASE_URL}/umpire`,
        headers: HEADER,
        data: JSON.stringify(umpires),
    };

    const res = await axios(fetchOptions);
    return res;
};
