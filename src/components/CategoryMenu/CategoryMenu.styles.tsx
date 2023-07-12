import styled from '@emotion/styled';

import { IconWrap } from '@components/@shared/Icon/Icon.styles';
import { FlexRowContainer } from '@components/Layout/Layout.styles';

import { breakpoints } from '@styles/theme';

export const CategoryMenuContainer = styled(FlexRowContainer)({
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1rem',
    width: '100%',

    [`@media (max-width: ${breakpoints.MOBILE})`]: {
        padding: '0',
    },
});

export const CategoryMenuWrapper = styled(FlexRowContainer)({
    width: '100%',
});

export const ItemViewChangerWrapper = styled(FlexRowContainer)({
    justifyContent: 'flex-end',
    alignItems: 'center',
    gap: '0.5rem',
});

export const ItemViewIconWrap = styled(IconWrap)(
    {
        padding: '0.25rem',
        cursor: 'pointer',
    },
    ({ isActive }: { isActive: boolean }) => ({
        '& svg, & path, & g, & rect': {
            color: isActive ? 'var(--primary500)' : 'var(--grey1000)',
            fill: isActive ? 'var(--primary500)' : 'var(--grey1000)',
            stroke: isActive ? 'var(--primary500)' : 'var(--grey1000)',
        },
    }),
);
