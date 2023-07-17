import styled from '@emotion/styled';

import { FlexColumnContainer } from '@components/Layout/Layout.styles';

export const UmpireZoneContainer = styled(FlexColumnContainer)({
    gap: '1rem',
    padding: '2rem 1rem',

    backgroundColor: 'var(--grey200)',
    borderRadius: '0.5rem',
    boxShadow: 'var(--shadowStrong)',
});
