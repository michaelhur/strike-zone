import styled from '@emotion/styled';

import { FlexColumnContainer, RowPageContainer } from '@components/Layout/Layout';

export const PlayerDetailPageContainer = styled(RowPageContainer)({
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    padding: '2rem',
});

export const LeftSection = styled(FlexColumnContainer)({
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    gap: '1rem',

    minHeight: '100vh',
    width: '100%',
});
