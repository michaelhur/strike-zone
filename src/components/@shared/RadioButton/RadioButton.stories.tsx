import { useState } from 'react';

import { action } from '@storybook/addon-actions';
import type { Meta, Story } from '@storybook/react';

import { ArrowLeftIcon, ArrowRightIcon, DarkIcon, LightIcon } from '@components/@shared/Icon';
import { RadioButton, RadioButtonProps } from '@components/@shared/RadioButton/RadioButton';

export default {
    title: 'Components/@shared/RadioButton',
    component: RadioButton,
} as Meta;

const Template: Story<RadioButtonProps> = (args) => {
    const [selected, setSelected] = useState<boolean>(false);
    const onClickRadioButton = () => {
        setSelected((prev) => !prev);
        action('Clicked');
    };

    return <RadioButton {...args} selected={selected} onClickRadioButton={onClickRadioButton} />;
};

export const Default = Template.bind({});
Default.args = {
    leftButtonLabel: 'Left Button',
    rightButtonLabel: 'Right Button',
};

export const WithIcon = Template.bind({});
WithIcon.args = {
    leftButtonLabel: 'Left Button',
    rightButtonLabel: 'Right Button',
    leftIconComponent: <ArrowLeftIcon />,
    rightIconComponent: <ArrowRightIcon />,
};

export const DarkMode = Template.bind({});
DarkMode.args = {
    leftButtonLabel: 'Light',
    rightButtonLabel: 'Dark',
    leftIconComponent: <LightIcon />,
    rightIconComponent: <DarkIcon />,
};
