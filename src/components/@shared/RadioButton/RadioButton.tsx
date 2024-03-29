import { ReactNode } from 'react';

import { RadioButtonContainer, RadioButtonItem } from '@components/@shared/RadioButton/RadioButton.styles';

export interface RadioButtonProps {
    selected: boolean;
    onClickRadioButton: () => void;
    leftButtonLabel: string;
    rightButtonLabel: string;
    leftIconComponent?: ReactNode;
    rightIconComponent?: ReactNode;
}
export const RadioButton = ({
    selected,
    onClickRadioButton,
    leftButtonLabel,
    rightButtonLabel,
    leftIconComponent,
    rightIconComponent,
}: RadioButtonProps) => {
    const renderRadioButtonItem = (isActive: boolean, iconComponent?: ReactNode, label?: string) => {
        return (
            <RadioButtonItem isActive={isActive}>
                {iconComponent && iconComponent}
                {label && <span>{label}</span>}
            </RadioButtonItem>
        );
    };

    return (
        <RadioButtonContainer onClick={onClickRadioButton}>
            {renderRadioButtonItem(!selected, leftIconComponent, leftButtonLabel)}
            {renderRadioButtonItem(selected, rightIconComponent, rightButtonLabel)}
        </RadioButtonContainer>
    );
};
