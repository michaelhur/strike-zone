import styled from '@emotion/styled';

import { ColumnPageContainer, FlexColumnContainer } from '@components/Layout/Layout';

export const GameDetailPageContainer = styled(ColumnPageContainer)({
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    gap: '1rem',

    padding: '2rem',
});

export const PlotContainer = styled(FlexColumnContainer)({
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    gap: '3rem',

    width: '100%',
});
