import { makeStyles } from '@material-ui/core';

import XLogoHorizontal from './x-logo-horizontal.svg';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
  },
}));

export const NavbarLogo = () => {
  const classes = useStyles();

  return (
    <img alt="xepelin-horizontal-logo" className={classes.root} height={26.48} src={XLogoHorizontal.src} width={94.1} />
  );
};
