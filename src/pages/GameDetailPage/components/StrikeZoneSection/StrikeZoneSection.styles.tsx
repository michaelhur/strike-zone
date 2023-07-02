import styled from '@emotion/styled';

import { FlexColumnContainer } from '@components/Layout/Layout';

export const StrikeZoneSectionContainer = styled(FlexColumnContainer)({
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    gap: '1rem',

    width: '100%',

    '& h2': {
        fontFamily: 'BMHANNAAir',
        fontSize: '2rem',
        color: 'var(--grey1000)',
    },
});
