import styled from '@emotion/styled';

import { breakpoints } from '@styles/theme';

import { SidebarStatus } from '@typings/sidebar';

export const LayoutWrapper = styled.main({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',

    minHeight: '100vh',
    width: '100%',
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

        '@media (max-width: 600px)': {
            marginLeft: '0',
            marginBottom: '6rem',
            width: '100%',
        },
    },
    ({ isSidebarOpen }: { isSidebarOpen: SidebarStatus }) => ({
        width: isSidebarOpen === 'opened' ? 'calc(100% - 290px)' : 'calc(100% - 88px)',
        marginLeft: isSidebarOpen === 'opened' ? '290px' : '88px',
    }),
);

export const RowPageContainer = styled(FlexRowContainer)(
    {
        display: 'flex',
        flexDirection: 'row',

        minHeight: '100vh',
        flex: '1',

        '@media (max-width: 600px)': {
            marginLeft: '0',
            marginBottom: '6rem',
            width: '100%',
        },
    },
    ({ isSidebarOpen }: { isSidebarOpen: SidebarStatus }) => ({
        width: isSidebarOpen === 'opened' ? 'calc(100% - 290px)' : 'calc(100% - 88px)',
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

    [`@media (max-width: ${breakpoints.MOBILE})`]: {
        padding: '0',
        '& h2': {
            fontSize: '1.25rem',
        },
    },
});

export const SectionTitle = styled.h2({
    fontFamily: 'BMHANNAAir',
    fontSize: '2rem',
    color: 'var(--grey1000)',

    padding: '0 1rem',
});
