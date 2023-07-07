import { AnyOBJ } from '@src/typings';

export const parseParmsToObject = (searchParams: string): AnyOBJ => {
    return Object.fromEntries(new URLSearchParams(searchParams));
};

export const getFetchOffsets = (page: number, offset = 10): number[] => {
    const start = (page - 1) * offset;
    const end = page * offset;

    return [start, end];
};
