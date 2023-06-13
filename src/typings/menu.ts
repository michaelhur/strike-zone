import { ReactNode } from 'react';

export interface Menu {
    name: string;
    path: string;
    iconComponent?: ReactNode;
    onClickHandler?: () => void;
}
