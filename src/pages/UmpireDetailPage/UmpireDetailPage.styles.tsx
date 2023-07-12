import styled from '@emotion/styled';

import { ColumnPageContainer, FlexColumnContainer } from '@components/Layout/Layout.styles';

import { breakpoints } from '@styles/theme';

export const UmpireDetailPageContainer = styled(ColumnPageContainer)({
    gap: '1rem',
    padding: '2rem',

    [`@media (max-width: ${breakpoints.MOBILE})`]: {
        padding: '1rem',
    },
});

export const UmpireStrikeZoneSection = styled(FlexColumnContainer)({
    gap: '1rem',
    // padding: '1rem',
});
