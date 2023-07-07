import styled from '@emotion/styled';

import { ColumnPageContainer, FlexColumnContainer, FlexRowContainer } from '@components/Layout/Layout';

export const TeamDetailPageContainer = styled(ColumnPageContainer)({
    padding: '2rem',
    gap: '1rem',
});

export const MidSection = styled(FlexRowContainer)({
    gap: '1rem',
    width: '100%',
});

export const TeamStrikeZoneSection = styled(FlexColumnContainer)({
    gap: '1rem',
    // padding: '1rem',
});
