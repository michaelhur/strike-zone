import { Meta, Story } from '@storybook/react';

import { Button, ButtonProps } from '@components/@shared/Button/Button';

export default {
    title: 'Components/@shared/Button',
    component: Button,
} as Meta;

const Template: Story<ButtonProps> = (args) => {
    return <Button {...args}>{args.children}</Button>;
};
