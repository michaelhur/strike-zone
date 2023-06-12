import { ReactNode } from 'react';

export interface TabOptions<T> {
    label: string;
    value: T;
    iconComponent?: ReactNode;
}
