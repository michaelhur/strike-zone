import styled from '@emotion/styled';

import { ColumnPageContainer, FlexColumnContainer, FlexRowContainer } from '@components/Layout/Layout.styles';

import { breakpoints } from '@styles/theme';

export const TeamDetailPageContainer = styled(ColumnPageContainer)({
    padding: '2rem',
    gap: '1rem',

    [`@media (max-width: ${breakpoints.MOBILE})`]: {
        padding: '1rem',
    },
});

export const MidSection = styled(FlexRowContainer)({
    gap: '1rem',
    width: '100%',

    [`@media (max-width: ${breakpoints.DESKTOP_SMALL})`]: {
        flexDirection: 'column',
    },
});

export const TeamStrikeZoneSection = styled(FlexColumnContainer)({
    gap: '1rem',
    flex: '1',
});
