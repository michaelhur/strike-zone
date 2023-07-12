import styled from '@emotion/styled';

import { FlexColumnContainer } from '@components/Layout/Layout.styles';

import { breakpoints } from '@styles/theme';

export const GameListSectionContainer = styled(FlexColumnContainer)({
    gap: '1rem',
    width: '100%',
});

export const GameListWrapper = styled.section({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: '1rem',
    flex: '1',

    [`@media (max-width: ${breakpoints.MOBILE})`]: {
        padding: '0',
    },
});
