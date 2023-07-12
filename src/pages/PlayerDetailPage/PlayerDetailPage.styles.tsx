import styled from '@emotion/styled';

import { FlexColumnContainer, RowPageContainer } from '@components/Layout/Layout.styles';

import { breakpoints } from '@styles/theme';

export const PlayerDetailPageContainer = styled(RowPageContainer)({
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    gap: '1rem',
    padding: '2rem',

    [`@media (max-width: ${breakpoints.MOBILE})`]: {
        padding: '1rem',
        flexDirection: 'column',
    },
});

export const LeftSection = styled(FlexColumnContainer)({
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    gap: '1rem',

    minHeight: '100vh',
    width: 'max(30%, 300px)',

    [`@media (max-width: ${breakpoints.MOBILE})`]: {
        minHeight: 'unset',
        width: '100%',
    },
});

export const RightSection = styled(FlexColumnContainer)({
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    gap: '1rem',

    minHeight: '100vh',
    flex: '1',
});
