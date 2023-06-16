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

    minHeight: '100vh',
    flex: '1',
});

export const RowPageContainer = styled.section({
    display: 'flex',
    flexDirection: 'row',

    minHeight: '100vh',
    flex: '1',
});

export const PageSectionContainer = styled(ColumnPageContainer)({
    padding: '1rem',
    gap: '1rem',

    width: '100%',
    // flex: '1',
});

export const SectionTitleWrapper = styled.div({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    padding: '1rem',

    '& h2': {
        fontFamily: 'BMHANNAAir',
        fontSize: '2rem',
    },
});
