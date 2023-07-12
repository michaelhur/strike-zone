import styled from '@emotion/styled';

import { breakpoints } from '@styles/theme';

export const TeamListItem = styled.li({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '0.5rem',
    padding: '1rem',

    width: 'calc((100% - 3rem)/4)',

    backgroundColor: 'var(--grey0)',
    borderRadius: '0.5rem',
    boxShadow: 'var(--shadowStrong)',

    cursor: 'pointer',

    [`@media (max-width: ${breakpoints.DESKTOP_SMALL})`]: {
        width: 'calc((100% - 2rem)/3)',
    },

    [`@media (max-width: ${breakpoints.TABLET})`]: {
        width: 'calc((100% - 1rem)/2)',
    },
});

export const TeamImage = styled.section({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',

    borderRadius: '50%',

    '& img': {
        height: '60px',
        width: '60px',
        borderRadius: '50%',
    },
});

export const TeamName = styled.h4({
    fontSize: '1rem',
    color: 'var(--grey1000)',
});
