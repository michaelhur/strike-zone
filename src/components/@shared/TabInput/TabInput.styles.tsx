import styled from '@emotion/styled';

import { FlexColumnContainer, FlexRowContainer } from '@components/Layout/Layout.styles';

import { breakpoints } from '@styles/theme';

export const TabInputWrapper = styled(FlexColumnContainer)({
    justifyContent: 'center',
    alignItems: 'center',
});

export const TabInputList = styled(FlexRowContainer)({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',

    width: '100%',

    cursor: 'pointer',

    [`@media (max-width: ${breakpoints.MOBILE})`]: {
        overflowX: 'scroll',
    },
});

interface StyledTabProps {
    size: 'small' | 'large';
}

export const StyledTab = styled(FlexRowContainer)(
    {
        justifyContent: 'center',
        alignItems: 'center',
        gap: '4px',

        color: 'var(--grey600)',
        borderCollapse: 'collapse',

        pointer: 'cursor',

        '&.active, :active, :hover': {
            fontWeight: '600',
            color: 'var(--primary500)',
            borderBottom: '2px solid var(--primary500)',

            '& svg path': {
                fill: 'var(--primary500)',
            },
        },
    },
    ({ size }: StyledTabProps) => ({
        fontSize: size === 'large' ? '16px' : '12px',
        padding: size === 'large' ? '24px 16px' : '16px 12px',

        '& svg': {
            width: size === 'large' ? '24px' : '16px',
            height: size === 'large' ? '24px' : '16px',
        },

        '&.active, :hover, :active': {
            padding: size === 'large' ? '24px 16px 22px' : '16px 12px 14px',
        },
    }),
);
