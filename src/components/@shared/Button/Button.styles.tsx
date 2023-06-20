import styled from '@emotion/styled';

interface StyledButtonProps {
    size: 'XSmall' | 'Small' | 'Medium' | 'Large' | 'XLarge';
    buttonTheme: 'disabled' | 'mono' | 'line' | 'fill';
    isLeftIcon?: boolean;
    isRightIcon?: boolean;
}

const buttonThemeVariant = {
    disabled: {
        background: 'var(--grey200)',
        color: 'var(--grey600)',
        borderColor: 'var(--grey200)',
    },
    mono: {
        background: 'var(--grey0)',
        color: 'var(--grey1000)',
        borderColor: 'var(--grey400)',
    },
    line: {
        background: 'var(--grey0)',
        color: 'var(--primary500)',
        borderColor: 'var(--primary500)',
    },
    fill: {
        background: 'var(--primary500)',
        color: 'var(--white)',
        borderColor: 'var(--primary500)',
    },
};

const buttonSizeVariant = {
    XSmall: {
        fontSize: '14px',
        width: '100px',
        height: '32px',
        padding: '0 12px',
        borderRadius: '32px',
        gap: '4px',
    },
    Small: {
        fontSize: '14px',
        width: '160px',
        height: '40px',
        padding: '0 16px',
        borderRadius: '8px',
        gap: '8px',
    },
    Medium: {
        fontSize: '16px',
        width: '280px',
        height: '48px',
        padding: '0 16px',
        borderRadius: '8px',
        gap: '8px',
    },
    Large: {
        fontSize: '18px',
        width: '318px',
        height: '56px',
        padding: '0 16px',
        borderRadius: '8px',
        gap: '8px',
    },
    XLarge: {
        fontSize: '20px',
        width: '350px',
        height: '56px',
        padding: '0 16px',
        borderRadius: '8px',
        gap: '8px',
    },
};

export const StyledButton = styled.button(
    {
        lineHeight: '1.5',
        borderWidth: '1px',
        borderStyle: 'solid',

        '& > div': {
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',

            fontWeight: '600',
        },
    },
    ({ size, buttonTheme, isLeftIcon, isRightIcon }: StyledButtonProps) => ({
        fontSize: buttonSizeVariant[size].fontSize,
        gap: buttonSizeVariant[size].gap,
        width: buttonSizeVariant[size].width,
        height: buttonSizeVariant[size].height,
        padding: buttonSizeVariant[size].padding,
        background: buttonThemeVariant[buttonTheme].background,
        borderColor: buttonThemeVariant[buttonTheme].borderColor,
        borderRadius: buttonSizeVariant[size].borderRadius,

        '& > div': {
            justifyContent: isLeftIcon && isRightIcon ? 'space-between' : 'center',
            color: buttonThemeVariant[buttonTheme].color,
        },

        '& svg': {
            color: buttonThemeVariant[buttonTheme].color,
            fill: buttonThemeVariant[buttonTheme].color,
        },

        '& svg path': {
            color: buttonThemeVariant[buttonTheme].color,
            fill: buttonThemeVariant[buttonTheme].color,
        },
    }),
);

export const ButtonContainer = styled.div({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '8px',
    margin: '0 auto',

    width: '100%',

    '@media (max-width: 600px)': {
        width: '100vw',
    },

    '&.fixed-bottom': {
        position: 'sticky',
        bottom: '0',
        backgroundColor: 'var(--grey0)',
        padding: '16px 0',
    },
});
