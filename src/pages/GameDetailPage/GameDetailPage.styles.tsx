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
});

export const StrikeZoneList = styled.ul({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    gap: '1rem',
    width: '100%',
});
