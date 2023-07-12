import { ReactNode } from 'react';

import { LayoutWrapper } from '@components/Layout/Layout.styles';

interface LayoutProps {
    children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
    return <LayoutWrapper>{children}</LayoutWrapper>;
};
