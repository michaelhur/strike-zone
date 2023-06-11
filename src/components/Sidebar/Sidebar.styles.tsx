import { NavLink } from 'react-router-dom';

import styled from '@emotion/styled';

export const SidebarContainer = styled.aside({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    gap: '2rem',
    padding: '2rem',

    width: '280px',
    minHeight: '100vh',
    borderRight: '1px solid var(--grey200)',
});

export const LogoSection = styled.section({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: '0.5rem',
    padding: '0.25rem',
    width: '100%',
});

export const MenuSection = styled.section({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    gap: '0.5rem',
    padding: '0.25rem',
    width: '100%',
});

export const MenuList = styled.ul({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    gap: '.75rem',
    padding: '0.25rem',
    width: '100%',

    '& li': {
        width: '100%',
    },
});

export const MenuItem = styled(NavLink)({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: '0.5rem',
    padding: '0.25rem',
    width: '100%',

    cursor: 'pointer',

    '&:hover': {
        backgroundColor: 'var(--grey500)',
    },
});
