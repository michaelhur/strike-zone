import styled from '@emotion/styled';

import { ColumnPageContainer } from '@components/Layout/Layout.styles';

import { breakpoints } from '@styles/theme';

export const TeamListPageContainer = styled(ColumnPageContainer)({
    gap: '1rem',
    padding: '2rem',

    [`@media (max-width: ${breakpoints.MOBILE})`]: {
        padding: '1rem',
    },
});
