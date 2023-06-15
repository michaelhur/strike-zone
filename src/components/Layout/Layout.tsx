import { ReactNode } from 'react';

import styled from '@emotion/styled';

interface LayoutProps {
    children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
    return <LayoutWrapper>{children}</LayoutWrapper>;
};

export const LayoutWrapper = styled.main({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',

    width: '100%',
    // width: 'min(100vw, 1400px)',
});

export const ColumnPageContainer = styled.section({
    display: 'flex',
    flexDirection: 'column',

    flex: '1',
});

export const RowPageContainer = styled.section({
    display: 'flex',
    flexDirection: 'row',

    minHeight: '100vh',
    flex: '1',
});
