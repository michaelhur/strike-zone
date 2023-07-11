import { ReactNode } from 'react';

import styled from '@emotion/styled';

import { SidebarStatus } from '@typings/sidebar';

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

export const FlexColumnContainer = styled.section({
    display: 'flex',
    flexDirection: 'column',
});

export const FlexRowContainer = styled.section({
    display: 'flex',
    flexDirection: 'row',
});

export const ColumnPageContainer = styled(FlexColumnContainer)(
    {
        display: 'flex',
        flexDirection: 'column',

        minHeight: '100vh',
        flex: '1',

        '@media (max-width: 768px)': {
            marginLeft: '88px',
        },
    },
    ({ isSidebarOpen }: { isSidebarOpen: SidebarStatus }) => ({
        marginLeft: isSidebarOpen === 'opened' ? '290px' : '88px',
    }),
);

export const RowPageContainer = styled(FlexRowContainer)(
    {
        display: 'flex',
        flexDirection: 'row',

        minHeight: '100vh',
        flex: '1',

        marginLeft: '290px',

        '@media (max-width: 768px)': {
            marginLeft: '88px',
        },
    },
    ({ isSidebarOpen }: { isSidebarOpen: SidebarStatus }) => ({
        marginLeft: isSidebarOpen === 'opened' ? '290px' : '88px',
    }),
);

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

    '& h3': {
        fontFamily: 'BMHANNAAir',
        fontSize: '1.5rem',
    },
});

export const SectionTitle = styled.h2({
    fontFamily: 'BMHANNAAir',
    fontSize: '2rem',
    color: 'var(--grey1000)',

    padding: '0 1rem',
});
