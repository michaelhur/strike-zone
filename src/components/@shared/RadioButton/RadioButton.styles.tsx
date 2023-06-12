import styled from '@emotion/styled';

export const RadioButtonContainer = styled.div({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '0.25rem',

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
    },
    ({ isActive }: RadioButtonItemProps) => ({
        color: isActive ? 'var(--grey800)' : 'var(--grey200)',
        background: isActive ? 'var(--grey200)' : 'var(--grey50)',
    }),
);
