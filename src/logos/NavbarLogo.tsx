import React from 'react';
import { makeStyles } from '@material-ui/core';

import XLogoHorizontal from './x-logo-horizontal';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
  },
}));

export const NavbarLogo = () => {
  const classes = useStyles();

  return <XLogoHorizontal className={classes.root} height={26.48} width={94.1} />;
};
