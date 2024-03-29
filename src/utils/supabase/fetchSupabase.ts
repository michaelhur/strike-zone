import axios, { AxiosRequestConfig } from 'axios';

import { AnyOBJ } from '@src/typings';

const SUPABASE_API_URL = import.meta.env.VITE_SUPABASE_API_URL;
const SUPABASE_KEY = import.meta.env.VITE_SUPABASE_KEY;

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
            url: `${SUPABASE_API_URL}/${databaseName}`,
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

export const updateSupabase = async (databaseName: string, data: AnyOBJ | AnyOBJ[], id: number | string) => {
    try {
        const dataCount = Array.isArray(data) ? data.length : 1;

        const HEADER = {
            'Content-Type': 'application/json',
            apikey: SUPABASE_KEY,
            Authorization: `Bearer ${SUPABASE_KEY}`,
            Prefer: 'return=minimal',
        };

        const fetchOptions: AxiosRequestConfig = {
            method: 'PATCH',
            url: `${SUPABASE_API_URL}/${databaseName}?id=eq.${id}`,
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
