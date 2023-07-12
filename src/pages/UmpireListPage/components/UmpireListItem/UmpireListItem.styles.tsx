import styled from '@emotion/styled';

import { FlexColumnContainer } from '@components/Layout/Layout';

import { breakpoints } from '@styles/theme';

export const UmpireListItemContainer = styled(FlexColumnContainer)({
    padding: '1rem',

    width: 'calc((100% - 3rem)/4)',

    backgroundColor: 'var(--grey0)',
    borderRadius: '0.5rem',

    cursor: 'pointer',

    '& span': {
        fontSize: '1rem',
        fontColor: 'var(--grey1000)',
    },

    [`@media (max-width: ${breakpoints.DESKTOP_SMALL})`]: {
        width: 'calc((100% - 2rem)/3)',
    },

    [`@media (max-width: ${breakpoints.TABLET})`]: {
        width: 'calc((100% - 1rem)/2)',
    },
});
