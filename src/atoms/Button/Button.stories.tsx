import { Meta, Story } from '@storybook/react';

import { Button } from './Button';
import { ButtonProps } from './types';

export default {
  args: {
    children: 'Descargar',
  },
  component: Button,
  title: 'Button',
} as Meta<typeof Button>;

const Template: Story<ButtonProps> = ({ children, ...props }) => <Button {...props}>{children}</Button>;

export const Normal = Template.bind({});
Normal.args = {
  children: 'Confirmar',
  isLoading: false,
  variant: 'outlined',
};

export const IsLoading = Template.bind({});
IsLoading.args = {
  children: 'Descargar PDF',
  isLoading: true,
  variant: 'outlined',
};
