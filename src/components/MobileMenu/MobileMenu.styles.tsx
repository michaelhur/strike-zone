import { NavLink } from 'react-router-dom';

import styled from '@emotion/styled';

import { FlexRowContainer } from '@components/Layout/Layout.styles';

import { breakpoints } from '@styles/theme';

export const MobileMenuContainer = styled(FlexRowContainer)({
    justifyContent: 'space-between',
    alignItems: 'center',

    width: '100vw',
    height: '4rem',

    backgroundColor: 'var(--grey50)',
    borderTop: '1px solid var(--grey200)',

    position: 'fixed',
    bottom: '0',

    [`@media (min-width: ${breakpoints.MOBILE})`]: {
        display: 'none',
    },
});

export const MobileMenuList = styled.ul({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    height: '4rem',

    '& li': {
        width: '20%',
    },
});

export const MenuItem = styled(NavLink)({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '0.25rem',
    width: '100%',
    height: '4rem',

    '& span': {
        fontSize: '12px',
    },

    '&:hover, &:active, &.active': {
        '& svg, & svg path, & svg g': {
            fill: 'var(--primary500)',
            strokeWidth: '2',
        },
        '& span': {
            color: 'var(--primary500)',
        },
    },
});
