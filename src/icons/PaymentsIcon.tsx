import { SvgIcon, styled } from '@material-ui/core';

import { IconExtendedProps, IconProps } from './types';
import { theme } from '../theme';

const CustomSvgIcon = styled(SvgIcon)((props: IconExtendedProps) => ({
  ...props.style,
}));

export const PaymentsIcon = (props: IconProps) => {
  const { style, isSelected } = props;

  if (isSelected) {
    return (
      <CustomSvgIcon
        fill="none"
        height="16"
        style={style}
        viewBox="0 0 22 16"
        width="22"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M18 10V2C18 0.9 17.1 0 16 0H2C0.9 0 0 0.9 0 2V10C0 11.1 0.9 12 2 12H16C17.1 12 18 11.1 18 10ZM16 10H2V2H16V10ZM9 3C7.34 3 6 4.34 6 6C6 7.66 7.34 9 9 9C10.66 9 12 7.66 12 6C12 4.34 10.66 3 9 3ZM22 3V14C22 15.1 21.1 16 20 16H3C3 15 3 15.1 3 14H20V3C21.1 3 21 3 22 3Z"
          fill="url(#paint0_linear_197_6190)"
        />
        <defs>
          <linearGradient
            gradientUnits="userSpaceOnUse"
            id="paint0_linear_197_6190"
            x1="2.09"
            x2="23.0281"
            y1="17.576"
            y2="-1.5148"
          >
            <stop stopColor="#D9732D" />
            <stop offset="0.470306" stopColor="#DF5B5B" />
            <stop offset="0.981571" stopColor="#C721DF" />
          </linearGradient>
        </defs>
      </CustomSvgIcon>
    );
  }

  return (
    <CustomSvgIcon
      fill="none"
      height="16"
      style={style}
      viewBox="0 0 22 16"
      width="22"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18 10V2C18 0.9 17.1 0 16 0H2C0.9 0 0 0.9 0 2V10C0 11.1 0.9 12 2 12H16C17.1 12 18 11.1 18 10ZM16 10H2V2H16V10ZM9 3C7.34 3 6 4.34 6 6C6 7.66 7.34 9 9 9C10.66 9 12 7.66 12 6C12 4.34 10.66 3 9 3ZM22 3V14C22 15.1 21.1 16 20 16H3C3 15 3 15.1 3 14H20V3C21.1 3 21 3 22 3Z"
        fill={theme.palette.text.secondary}
      />
    </CustomSvgIcon>
  );
};
