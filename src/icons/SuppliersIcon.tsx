import { SvgIcon, styled } from '@material-ui/core';
import PropTypes from 'prop-types';

import { theme } from '../theme';

const CustomSvgIcon = styled(SvgIcon)((props: any) => ({
  ...props.style,
}));

export const SuppliersIcon = (props) => {
  const { style, isSelected } = props;

  if (isSelected) {
    return (
      <CustomSvgIcon
        fill="none"
        height="18"
        style={style}
        viewBox="0 0 20 18"
        width="20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10 4V2C10 0.9 9.1 0 8 0H2C0.9 0 0 0.9 0 2V16C0 17.1 0.9 18 2 18H18C19.1 18 20 17.1 20 16V6C20 4.9 19.1 4 18 4H10ZM4 16H2V14H4V16ZM4 12H2V10H4V12ZM4 8H2V6H4V8ZM4 4H2V2H4V4ZM8 16H6V14H8V16ZM8 12H6V10H8V12ZM8 8H6V6H8V8ZM8 4H6V2H8V4ZM17 16H10V14H12V12H10V10H12V8H10V6H17C17.55 6 18 6.45 18 7V15C18 15.55 17.55 16 17 16ZM16 8H14V10H16V8ZM16 12H14V14H16V12Z"
          fill="url(#paint0_linear_197_5826)"
        />
        <defs>
          <linearGradient
            gradientUnits="userSpaceOnUse"
            id="paint0_linear_197_5826"
            x1="1.9"
            x2="24.4936"
            y1="19.773"
            y2="3.1263"
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
      height="18"
      style={style}
      viewBox="0 0 20 18"
      width="20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10 4V2C10 0.9 9.1 0 8 0H2C0.9 0 0 0.9 0 2V16C0 17.1 0.9 18 2 18H18C19.1 18 20 17.1 20 16V6C20 4.9 19.1 4 18 4H10ZM4 16H2V14H4V16ZM4 12H2V10H4V12ZM4 8H2V6H4V8ZM4 4H2V2H4V4ZM8 16H6V14H8V16ZM8 12H6V10H8V12ZM8 8H6V6H8V8ZM8 4H6V2H8V4ZM17 16H10V14H12V12H10V10H12V8H10V6H17C17.55 6 18 6.45 18 7V15C18 15.55 17.55 16 17 16ZM16 8H14V10H16V8ZM16 12H14V14H16V12Z"
        fill={theme.palette.text.secondary}
      />
    </CustomSvgIcon>
  );
};

SuppliersIcon.defaultProps = {
  isSelected: false,
  style: {},
};

SuppliersIcon.propTypes = {
  isSelected: PropTypes.bool,
  style: PropTypes.objectOf(Object),
};
