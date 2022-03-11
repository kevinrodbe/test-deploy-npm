import { Theme } from '@material-ui/core';

export interface IconProps {
  // TODO: revisar porque dataQA es pasado como prop, porque deberia tenerlo el componente host
  dataQa?: string;
  isChecked?: boolean;
  isSelected?: boolean;
  style?: {
    fill?: string;
  };
}

export interface IconExtendedProps extends IconProps {
  theme: Theme;
}
