import { ReactNode } from 'react';

import { IconWrap } from '@components/@shared/Icon/Icon.styles';
import { RadioButtonContainer, RadioButtonItem } from '@components/@shared/RadioButton/RadioButton.styles';

interface RadioButtonProps<T> {
    selected: T;
    leftIconComponent?: ReactNode;
    leftButtonLabel?: string;
    leftButtonValue: T;
    onClickLeftButton: () => void;
    rightIconComponent?: ReactNode;
    rightButtonLabel?: string;
    rightButtonValue: T;
    onClickRightButton: () => void;
}
export const RadioButton = <T,>({
    selected,
    leftIconComponent,
    leftButtonLabel,
    leftButtonValue,
    onClickLeftButton,
    rightIconComponent,
    rightButtonLabel,
    rightButtonValue,
    onClickRightButton,
}: RadioButtonProps<T>) => {
    const isLeftSelected = selected === leftButtonValue;
    const isRightSelected = selected === rightButtonValue;

    return (
        <RadioButtonContainer>
            <RadioButtonItem isActive={isLeftSelected} onClick={onClickLeftButton}>
                {leftIconComponent && <IconWrap>{leftIconComponent}</IconWrap>}
                {leftButtonLabel && <span>{leftButtonLabel}</span>}
            </RadioButtonItem>
            <RadioButtonItem isActive={isRightSelected} onClick={onClickRightButton}>
                {rightIconComponent && <IconWrap>{rightIconComponent}</IconWrap>}
                {rightButtonLabel && <span>{rightButtonLabel}</span>}
            </RadioButtonItem>
        </RadioButtonContainer>
    );
};
