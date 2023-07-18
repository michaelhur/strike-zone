import styled from '@emotion/styled';

import { FlexColumnContainer } from '@components/Layout/Layout.styles';

import { breakpoints } from '@styles/theme';

export const TeamRosterContainer = styled(FlexColumnContainer)({
    gap: '1rem',
    padding: '2rem 1rem',

    background: 'var(--grey200)',
    borderRadius: '0.5rem',

    [`@media (max-width: ${breakpoints.MOBILE})`]: {
        padding: '0rem',
    },
});
