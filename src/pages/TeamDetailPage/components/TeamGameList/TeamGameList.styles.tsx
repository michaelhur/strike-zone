import styled from '@emotion/styled';

import { FlexColumnContainer } from '@components/Layout/Layout';

import { breakpoints } from '@styles/theme';

export const TeamGameListContainer = styled(FlexColumnContainer)({
    gap: '1rem',
    padding: '2rem 1rem',

    width: 'max(40%, 350px)',

    backgroundColor: 'var(--grey200)',
    borderRadius: '0.5rem',

    [`@media (max-width: ${breakpoints.DESKTOP_SMALL})`]: {
        minHeight: 'unset',
        width: '100%',
    },
});
