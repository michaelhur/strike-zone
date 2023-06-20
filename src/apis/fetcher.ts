import axios, { AxiosRequestConfig } from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

type AnyOBJ = { [key: string]: any };

export const fetcher = async ({
    method,
    path,
    body,
    params,
}: {
    method: 'get' | 'post' | 'put' | 'delete' | 'patch';
    path: string;
    body?: AnyOBJ;
    params?: AnyOBJ;
}) => {
    try {
        let url = `${API_BASE_URL}${path}`;

        if (params && Object.keys(params).length) {
            const searchParams = new URLSearchParams(params);
            url += '?' + searchParams.toString();
        }

        const fetchOptions: AxiosRequestConfig = {
            method,
            url,
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
            },
        };

        if (body) fetchOptions.data = JSON.stringify(body);

        const res = await axios(fetchOptions);
        if (res.status === 200) return res.data;
    } catch (err) {
        console.log(err);
    }
};
