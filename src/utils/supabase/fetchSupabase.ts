import axios, { AxiosRequestConfig } from 'axios';

import { AnyOBJ } from '@src/typings';

const SUPABASE_BASE_URL = import.meta.env.SUPABASE_BASE_URL;
const SUPABASE_KEY = import.meta.env.SUPABASE_KEY;

export const fetchSupabase = async (databaseName: string, data: AnyOBJ | AnyOBJ[]) => {
    try {
        const dataCount = Array.isArray(data) ? data.length : 1;

        const HEADER = {
            'Content-Type': 'application/json',
            apikey: SUPABASE_KEY,
            Authorization: `Bearer ${SUPABASE_KEY}`,
            Prefer: 'resolution=merge-duplicates',
        };

        const fetchOptions: AxiosRequestConfig = {
            method: 'POST',
            url: `${SUPABASE_BASE_URL}/${databaseName}`,
            headers: HEADER,
            data: JSON.stringify(data),
        };

        const res = await axios(fetchOptions);
        console.log(`${dataCount} rows uploaded to ${databaseName}`);
        return { status: res.status };
    } catch (err) {
        console.log(err);
    }
};
