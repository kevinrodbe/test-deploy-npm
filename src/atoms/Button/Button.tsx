import { CircularProgress, Button as MUIButton } from '@material-ui/core';
import { FC } from 'react';

import { ButtonProps } from './types';

// NOTE: test

export const Button: FC<ButtonProps> = ({ isLoading, children, ...rest }) => (
  <MUIButton
    color="primary"
    type="submit"
    {...rest}
    endIcon={isLoading ? <CircularProgress color="inherit" size={24} /> : null}
  >
    {isLoading ? 'Cargando...' : children}
  </MUIButton>
);
