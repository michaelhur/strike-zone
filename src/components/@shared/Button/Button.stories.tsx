import { Meta, Story } from '@storybook/react';

import { Button, ButtonProps } from '@components/@shared/Button/Button';
import { ArrowLeftIcon, ArrowRightIcon } from '@components/@shared/Icon';

export default {
    title: 'Components/@shared/Button',
    component: Button,
} as Meta;

const Template: Story<ButtonProps> = (args) => {
    return <Button {...args}>{args.children}</Button>;
};

export const ButtonTemplate = Template.bind({});
ButtonTemplate.args = { children: '버튼', size: 'XSmall', buttonTheme: 'fill', buttonType: 'button' };

export const ButtonWithLeftIconTemplate = Template.bind({});
ButtonWithLeftIconTemplate.args = {
    children: '버튼',
    size: 'XSmall',
    buttonTheme: 'fill',
    buttonType: 'button',
    leftIcon: <ArrowLeftIcon />,
};

export const ButtonWithRightIconTemplate = Template.bind({});
ButtonWithRightIconTemplate.args = {
    children: '버튼',
    size: 'XSmall',
    buttonTheme: 'fill',
    buttonType: 'button',
    leftIcon: <ArrowRightIcon />,
};

export const ButtonWithBothIconTemplate = Template.bind({});
ButtonWithBothIconTemplate.args = {
    children: '버튼',
    size: 'XSmall',
    buttonTheme: 'fill',
    buttonType: 'button',
    leftIcon: <ArrowLeftIcon />,
    rightIcon: <ArrowRightIcon />,
};
