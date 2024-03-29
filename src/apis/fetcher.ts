import axios, { AxiosRequestConfig } from 'axios';

const API_BASE_URL = import.meta.env.VITE_SUPABASE_API_URL;
const API_KEY = import.meta.env.VITE_SUPABASE_KEY;

const supabaseHeader = {
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json',
    apikey: API_KEY,
    Authorization: `Bearer ${API_KEY}`,
};

type AnyOBJ = { [key: string]: any };

export const fetcher = async ({
    method,
    path,
    headers,
    body,
    params,
}: {
    method: 'get' | 'post' | 'put' | 'delete' | 'patch';
    path: string;
    headers?: AnyOBJ;
    body?: AnyOBJ;
    params?: AnyOBJ;
}) => {
    try {
        let url = `${API_BASE_URL}${path}`;

        if (params && Object.keys(params).length) {
            const searchParams = new URLSearchParams(params);
            url += '?' + searchParams.toString();
        }

        const requestHeader = headers
            ? {
                  ...headers,
                  ...supabaseHeader,
              }
            : supabaseHeader;

        const fetchOptions: AxiosRequestConfig = {
            method,
            url,
            headers: requestHeader,
        };

        if (body) fetchOptions.data = JSON.stringify(body);

        return await axios(fetchOptions);
    } catch (err) {
        console.log(err);
    }
};
