import styled from '@emotion/styled';

import { FlexColumnContainer } from '@components/Layout/Layout';

export const StrikeZoneSectionContainer = styled(FlexColumnContainer)({
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    gap: '1rem',
    padding: '1rem',

    width: '100%',
});

export const SectionTitle = styled.h2({
    fontFamily: 'BMHANNAAir',
    fontSize: '2rem',
    color: 'var(--grey1000)',

    padding: '0 1rem',
});
