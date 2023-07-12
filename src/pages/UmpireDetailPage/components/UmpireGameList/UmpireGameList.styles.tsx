import styled from '@emotion/styled';

import { FlexColumnContainer, FlexRowContainer } from '@components/Layout/Layout';

import { breakpoints } from '@styles/theme';

export const MidSection = styled(FlexRowContainer)({
    gap: '1rem',
    width: '100%',

    [`@media (max-width: ${breakpoints.DESKTOP_SMALL})`]: {
        flexDirection: 'column',
    },
});

export const UmpireGameListContainer = styled(FlexColumnContainer)({
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    gap: '1rem',
    padding: '2rem',

    width: 'max(40%, 350px)',

    backgroundColor: 'var(--grey200)',
    borderRadius: '0.5rem',

    [`@media (max-width: ${breakpoints.DESKTOP_SMALL})`]: {
        minHeight: 'unset',
        width: '100%',
    },
});
