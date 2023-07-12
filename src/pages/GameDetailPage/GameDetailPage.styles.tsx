import styled from '@emotion/styled';

import { ColumnPageContainer, FlexColumnContainer } from '@components/Layout/Layout.styles';

import { breakpoints } from '@styles/theme';

export const GameDetailPageContainer = styled(ColumnPageContainer)({
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    gap: '1rem',
    padding: '2rem',

    [`@media (max-width: ${breakpoints.MOBILE})`]: {
        padding: '1rem',
    },
});

export const PlotContainer = styled(FlexColumnContainer)({
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    gap: '3rem',

    width: '100%',
});
