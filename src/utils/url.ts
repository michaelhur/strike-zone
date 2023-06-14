import { AnyOBJ } from '@src/typings';

export const parseParmsToObject = (searchParams: string): AnyOBJ => {
    return Object.fromEntries(new URLSearchParams(searchParams));
};
