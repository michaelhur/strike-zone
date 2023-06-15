import styled from '@emotion/styled';

export const RadioButtonContainer = styled.div({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '0.25rem',
    gap: '0.25rem',

    width: '100%',

    background: 'var(--grey50)',
    borderRadius: '0.5rem',
    border: '1px solid var(--grey100)',

    transition: 'all 0.2s ease-in',
});

interface RadioButtonItemProps {
    isActive: boolean;
}

export const RadioButtonItem = styled.div(
    {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '0.25rem',

        width: '100%',

        borderRadius: '0.5rem',

        cursor: 'pointer',
        transition: 'all 0.3s ease-out',

        '&:hover': {
            color: 'var(--grey900)',
            borderColor: 'var(--grey200)',
            backgroundColor: 'var(--grey200)',

            '& svg path': {
                fill: 'var(--grey900)',
            },
        },
    },
    ({ isActive }: RadioButtonItemProps) => ({
        border: isActive ? '1px solid var(--grey200)' : '1px solid transparent',
        color: isActive ? 'var(--grey900)' : 'var(--grey500)',
        background: isActive ? 'var(--grey200)' : 'var(--grey50)',

        '& svg': {
            color: isActive ? 'var(--grey900)' : 'var(--grey500)',
            fill: isActive ? 'var(--grey900)' : 'var(--grey500)',

            '& path': {
                color: isActive ? 'var(--grey900)' : 'var(--grey500)',
                fill: isActive ? 'var(--grey900)' : 'var(--grey500)',
            },
        },
    }),
);
