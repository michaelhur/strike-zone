import { ReactNode } from 'react';

export interface TabOptions<T> {
    label: string;
    value: T;
    iconComponent?: ReactNode;
}

export interface ViewTypeOptions<T> {
    key: string;
    value: T;
    iconComponent: ReactNode;
}
