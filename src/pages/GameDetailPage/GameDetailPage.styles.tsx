import styled from '@emotion/styled';

import { ColumnPageContainer, FlexRowContainer } from '@components/Layout/Layout';

export const GameDetailPageContainer = styled(ColumnPageContainer)({
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    gap: '1rem',

    padding: '2rem',
});

export const PlotContainer = styled(FlexRowContainer)({
    justifyContent: 'center',
    alignItems: 'flex-start',
    gap: '1rem',
});
