import { useState } from 'react';

import { action } from '@storybook/addon-actions';
import type { Meta, StoryObj } from '@storybook/react';

import { RadioButton, RadioButtonProps } from '@components/@shared/RadioButton/RadioButton';

import { ModeTheme } from '@typings/theme';

const meta: Meta<RadioButtonProps<any>> = {
    component: RadioButton,
};

export default meta;

type Story<T> = StoryObj<RadioButtonProps<T>>;

export const Template: Story<ModeTheme> = (args) => {
    const [selected, isSelected] = useState<ModeTheme>('light');
    const onClickLeftButton = () => {
        isSelected('light');
        action('Left Button Clicked');
    };
    const onClickRightButton = () => {
        isSelected('dark');
        action('Right Button Clicked');
    };

    return (
        <RadioButton
            {...args}
            selected={selected}
            onClickLeftButton={onClickLeftButton}
            onClickRightButton={onClickRightButton}
        />
    );
};
