import styled from '@emotion/styled';

import { breakpoints } from '@styles/theme';

export const PlayerListItemContainer = styled.tr({
    padding: '0.5rem',

    width: '100%',

    border: '1px solid var(--grey1000)',
    backgroundColor: 'var(--grey0)',

    cursor: 'pointer',
});

export const StyledCell = styled.td({
    padding: '1rem',
    width: '15%',

    fontSize: '1rem',

    [`@media (max-width: ${breakpoints.MOBILE})`]: {
        width: '20%',
        fontSize: '0.85rem',
    },
});

export const StyledNameCell = styled.td({
    padding: '1rem',
    flex: '1',

    fontSize: '1rem',

    [`@media (max-width: ${breakpoints.MOBILE})`]: {
        fontSize: '0.85rem',
    },
});
