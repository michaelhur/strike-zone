import styled from '@emotion/styled';

export const TabInputWrapper = styled.div({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',

    background: 'var(--grey0)',
});

export const TabInputList = styled.div({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',

    width: '100%',

    cursor: 'pointer',
});

interface StyledTabProps {
    size: 'small' | 'large';
}

export const StyledTab = styled.div(
    {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '4px',

        flex: '1 0 0',

        color: 'var(--grey600)',
        border: '1px solid var(--grey300)',
        borderCollapse: 'collapse',

        pointer: 'cursor',

        '&.active, :active, :hover': {
            fontWeight: '600',
            color: 'var(--primary500)',
            border: '2px solid var(--primary500)',

            '& svg path': {
                fill: 'var(--primary500)',
            },
        },
    },
    ({ size }: StyledTabProps) => ({
        fontSize: size === 'large' ? '16px' : '12px',
        padding: size === 'large' ? '24px 16px' : '16px 8px',

        '& svg': {
            width: size === 'large' ? '24px' : '16px',
            height: size === 'large' ? '24px' : '16px',
        },

        '&.active, :hover, :active': {
            padding: size === 'large' ? '23px 15px' : '15px 8px',
        },
    }),
);
