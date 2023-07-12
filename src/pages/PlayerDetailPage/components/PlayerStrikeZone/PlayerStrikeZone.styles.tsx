import styled from '@emotion/styled';

import { FlexColumnContainer } from '@components/Layout/Layout';

export const PlayerStrikeZoneContainer = styled(FlexColumnContainer)({
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    gap: '1rem',
    padding: '1rem',

    backgroundColor: 'var(--grey200)',
    borderRadius: '0.5rem',
});
