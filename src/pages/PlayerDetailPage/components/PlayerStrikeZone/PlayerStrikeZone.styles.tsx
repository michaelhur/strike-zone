import styled from '@emotion/styled';

import { FlexColumnContainer } from '@components/Layout/Layout.styles';

export const PlayerStrikeZoneContainer = styled(FlexColumnContainer)({
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    gap: '1rem',
    padding: '1rem',

    minHeight: '428px',
    width: '100%',

    backgroundColor: 'var(--grey200)',
    borderRadius: '0.5rem',
});
