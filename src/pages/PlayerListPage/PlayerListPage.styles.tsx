import styled from '@emotion/styled';

import { ColumnPageContainer } from '@components/Layout/Layout.styles';

import { breakpoints } from '@styles/theme';

export const PlayerListContainer = styled(ColumnPageContainer)({
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    padding: '2rem',

    [`@media (max-width: ${breakpoints.MOBILE})`]: {
        padding: '1rem',
    },
});
