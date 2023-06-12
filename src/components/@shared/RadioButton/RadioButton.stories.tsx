import { useState } from 'react';

import { action } from '@storybook/addon-actions';
import type { Meta, StoryObj } from '@storybook/react';

import { DarkIcon, LightIcon } from '@components/@shared/Icon';
import { RadioButton, RadioButtonProps } from '@components/@shared/RadioButton/RadioButton';

import { ModeTheme } from '@typings/theme';

const meta: Meta<RadioButtonProps<any>> = {
    component: RadioButton,
};

export default meta;

type Story<T> = StoryObj<RadioButtonProps<T>>;

export const DarkModeToggle: Story<ModeTheme> = (args) => {
    const [selected, isSelected] = useState<ModeTheme>('light');
    const onClickLeftButton = () => isSelected('light');
    const onClickRightButton = () => isSelected('dark');

    return (
        <RadioButton
            selected={selected}
            leftIconComponent={<LightIcon color={selected === 'light' ? 'var(--grey900)' : 'var(--grey300)'} />}
            leftButtonValue={'light'}
            leftButtonLabel={'Light'}
            rightIconComponent={<DarkIcon color={selected === 'dark' ? 'var(--grey900)' : 'var(--grey300)'} />}
            rightButtonValue={'dark'}
            rightButtonLabel={'Dark'}
            onClickLeftButton={onClickLeftButton}
            onClickRightButton={onClickRightButton}
        />
    );
};
