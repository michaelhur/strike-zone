import { NavLink, NavLinkProps } from 'react-router-dom';

import styled from '@emotion/styled';

import { FlexColumnContainer, FlexRowContainer } from '@components/Layout/Layout';

export const StyledMenuWrapper = styled(FlexColumnContainer)({
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
});

export const StyledMenu = styled(FlexRowContainer)({
    justifyContent: 'flex-start',
    alignItems: 'center',

    width: '100%',
});

interface StyledTabProps extends NavLinkProps {
    size: 'small' | 'large';
    position: 'all' | 'bottom';
}

export const StyledTab = styled(NavLink)(
    {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '4px',

        flex: '1 0 0',

        color: 'var(--grey600)',
        borderColor: 'var(--grey300)',
        borderStyle: 'solid',
        borderCollapse: 'collapse',

        pointer: 'cursor',

        '&.active, :active, :hover': {
            fontWeight: '600',
            color: 'var(--primary500)',
            borderColor: 'var(--primary500)',

            '& svg path': {
                fill: 'var(--primary500)',
            },
        },
    },
    ({ size, position }: StyledTabProps) => ({
        fontSize: size === 'large' ? '16px' : '12px',
        padding: size === 'large' ? '24px 16px' : '16px 8px',
        borderWidth: position === 'all' ? '1px' : '0 0 1px 0',

        '& svg': {
            width: size === 'large' ? '24px' : '16px',
            height: size === 'large' ? '24px' : '16px',
        },

        '&.active, :hover, :active': {
            padding: size === 'large' ? '24px 16px 22px' : '16px 8px 14px',
            borderWidth: position === 'all' ? '3px' : '0 0 3px 0',
        },
    }),
);
