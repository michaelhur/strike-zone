import { NavLink } from 'react-router-dom';

import styled from '@emotion/styled';

interface SidebarContainerProps {
    isSidebarOpen: boolean;
}

export const StyledTitle = styled.h3({
    fontFamily: 'BMHANNAAir',
    fontSize: '2rem',
    fontWeight: '800',
    color: 'var(--primary500)',
});

export const SidebarContainer = styled.aside(
    {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        padding: '2rem 1rem',

        minHeight: '100vh',

        backgroundColor: 'var(--grey50)',
        borderRight: '1px solid var(--grey200)',
        position: 'fixed',
    },
    ({ isSidebarOpen }: SidebarContainerProps) => ({
        width: isSidebarOpen ? '290px' : '6rem',
    }),
);

export const TopSection = styled.section({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    gap: '2rem',

    width: '100%',
});

export const BottomSection = styled.section({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    gap: '2rem',

    width: '100%',
});

export const LogoSection = styled.section({
    padding: '1rem',
    width: '100%',

    cursor: 'pointer',
});

export const Logo = styled(NavLink)({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: '0.5rem',
    width: '100%',
});

export const MenuSection = styled.section({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    gap: '0.5rem',
    width: '100%',
});

export const MenuList = styled.ul({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    width: '100%',

    '& li': {
        width: '100%',
        padding: '0.25rem 0',
    },
});

export const MenuItem = styled(NavLink)({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: '0.5rem',
    padding: '0.5rem 1rem',
    width: '100%',

    cursor: 'pointer',

    '&:hover, &:active, &.active': {
        backgroundColor: 'var(--grey300)',
        borderRadius: '0.5rem',
    },
});
