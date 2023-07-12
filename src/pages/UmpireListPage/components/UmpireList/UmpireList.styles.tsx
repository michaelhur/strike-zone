import styled from '@emotion/styled';

import { FlexRowContainer } from '@components/Layout/Layout.styles';

export const UmpireListContainer = styled(FlexRowContainer)({
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    gap: '1rem',
    padding: '1rem',

    width: '100%',
    flexWrap: 'wrap',

    backgroundColor: 'var(--grey200)',
    borderRadius: '0.5rem',
});
