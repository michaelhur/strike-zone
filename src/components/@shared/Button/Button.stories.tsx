import { Meta, Story } from '@storybook/react';

import { Button, ButtonProps } from '@components/@shared/Button/Button';
import { ArrowLeftIcon, ArrowRightIcon } from '@components/@shared/Icon';

export default {
    title: 'Components/@shared/Button',
    component: Button,
} as Meta;

const Template: Story<ButtonProps> = (args) => {
    return (
        <Button {...args} size={'XSmall'} buttonTheme={'disabled'} buttonType={'button'}>
            {args.children}
        </Button>
    );
};

export const ButtonTemplate = Template.bind({});
ButtonTemplate.args = { children: '버튼' };

export const ButtonWithLeftIconTemplate = Template.bind({});
ButtonWithLeftIconTemplate.args = { children: '버튼', leftIcon: <ArrowLeftIcon /> };

export const ButtonWithRightIconTemplate = Template.bind({});
ButtonWithRightIconTemplate.args = { children: '버튼', leftIcon: <ArrowRightIcon /> };

export const ButtonWithBothIconTemplate = Template.bind({});
ButtonWithBothIconTemplate.args = { children: '버튼', leftIcon: <ArrowLeftIcon />, rightIcon: <ArrowRightIcon /> };
