import styled from '@emotion/styled';

import { FlexColumnContainer, FlexRowContainer } from '@components/Layout/Layout';

export const UmpireGameListContainer = styled(FlexColumnContainer)({
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    gap: '1rem',
    padding: '2rem',

    backgroundColor: 'var(--grey200)',
    borderRadius: '0.5rem',
});

export const MidSection = styled(FlexRowContainer)({
    gap: '1rem',
    width: '100%',
});
