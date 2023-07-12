import styled from '@emotion/styled';

import { RowPageContainer } from '@components/Layout/Layout.styles';

import { breakpoints } from '@styles/theme';

export const FixturePageContainer = styled(RowPageContainer)({
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    gap: '1rem',
    padding: '2rem',

    [`@media (max-width: ${breakpoints.TABLET})`]: {
        flexDirection: 'column',
    },

    [`@media (max-width: ${breakpoints.MOBILE})`]: {
        padding: '1rem',
        gap: '2rem',
    },
});
