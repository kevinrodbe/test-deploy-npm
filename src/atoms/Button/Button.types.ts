import { ButtonProps as MUIButtonProps } from '@material-ui/core';
import { ReactNode } from 'react';

export interface ButtonProps extends MUIButtonProps {
  children: ReactNode;
  isLoading?: boolean;
}
