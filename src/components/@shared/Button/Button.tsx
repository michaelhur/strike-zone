import { ReactNode } from 'react';

import { ButtonContainer, StyledButton } from '@components/@shared/Button/Button.styles';
import { IconWrap } from '@components/@shared/Icon/Icon.styles';

interface ButtonProps {
    children: string;
    size: 'XSmall' | 'Small' | 'Medium' | 'Large' | 'XLarge';
    buttonTheme: 'disabled' | 'mono' | 'line' | 'fill';
    buttonType?: 'button' | 'submit' | 'reset';
    leftIcon?: ReactNode;
    rightIcon?: ReactNode;
    onClickHandler?: () => void;
}

export const Button = ({
    children,
    size,
    buttonTheme,
    leftIcon,
    rightIcon,
    onClickHandler,
    buttonType = 'button',
}: ButtonProps) => {
    return (
        <StyledButton
            type={buttonType}
            size={size}
            buttonTheme={buttonTheme}
            isLeftIcon={!!leftIcon}
            isRightIcon={!!rightIcon}
            onClick={onClickHandler}
        >
            <div>
                {leftIcon && <IconWrap>{leftIcon}</IconWrap>}
                {children}
                {rightIcon && <IconWrap>{rightIcon}</IconWrap>}
            </div>
        </StyledButton>
    );
};

interface OneButtonGroupProps {
    buttonLabel: string;
    buttonType?: 'button' | 'submit' | 'reset';
    onButtonClick: () => void;
    fixedBottom?: boolean;
}

export const OneButtonGroup = ({
    buttonLabel,
    buttonType = 'button',
    onButtonClick,
    fixedBottom = false,
}: OneButtonGroupProps) => {
    return (
        <ButtonContainer className={fixedBottom ? 'fixed-bottom' : ''}>
            <Button buttonType={buttonType} onClickHandler={onButtonClick} size={'XLarge'} buttonTheme={'fill'}>
                {buttonLabel}
            </Button>
        </ButtonContainer>
    );
};

interface TwoButtonGroupProps {
    leftButtonLabel: string;
    leftButtonType?: 'button' | 'submit' | 'reset';
    onLeftButtonClick: () => void;
    rightButtonLabel: string;
    rightButtonType?: 'button' | 'submit' | 'reset';
    onRightButtonClick: () => void;
    fixedBottom?: boolean;
}

export const TwoButtonGroup = ({
    leftButtonLabel,
    leftButtonType = 'button',
    onLeftButtonClick,
    rightButtonLabel,
    rightButtonType = 'button',
    onRightButtonClick,
    fixedBottom = false,
}: TwoButtonGroupProps) => {
    return (
        <ButtonContainer className={fixedBottom ? 'fixed-bottom' : ''}>
            <Button
                buttonType={leftButtonType}
                onClickHandler={onLeftButtonClick}
                size={'XLarge'}
                buttonTheme={'disabled'}
            >
                {leftButtonLabel}
            </Button>
            <Button
                buttonType={rightButtonType}
                onClickHandler={onRightButtonClick}
                size={'XLarge'}
                buttonTheme={'fill'}
            >
                {rightButtonLabel}
            </Button>
        </ButtonContainer>
    );
};
