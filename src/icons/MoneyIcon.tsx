import { SvgIcon, styled } from '@material-ui/core';
import PropTypes from 'prop-types';
import { theme } from '../theme';

const CustomSvgIcon = styled(SvgIcon)((props: any) => ({
  height: 24,
  width: 24,
  ...props.style,
}));

export const MoneyIcon = (props) => {
  const { style, isSelected } = props;

  if (isSelected) {
    return (
      <CustomSvgIcon
        fill="none"
        height="20"
        style={style}
        viewBox="0 0 20 20"
        width="20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10 20C4.477 20 0 15.523 0 10C0 4.477 4.477 0 10 0C15.523 0 20 4.477 20 10C20 15.523 15.523 20 10 20ZM10 18C12.1217 18 14.1566 17.1571 15.6569 15.6569C17.1571 14.1566 18 12.1217 18 10C18 7.87827 17.1571 5.84344 15.6569 4.34315C14.1566 2.84285 12.1217 2 10 2C7.87827 2 5.84344 2.84285 4.34315 4.34315C2.84285 5.84344 2 7.87827 2 10C2 12.1217 2.84285 14.1566 4.34315 15.6569C5.84344 17.1571 7.87827 18 10 18V18ZM6.5 12H12C12.1326 12 12.2598 11.9473 12.3536 11.8536C12.4473 11.7598 12.5 11.6326 12.5 11.5C12.5 11.3674 12.4473 11.2402 12.3536 11.1464C12.2598 11.0527 12.1326 11 12 11H8C7.33696 11 6.70107 10.7366 6.23223 10.2678C5.76339 9.79893 5.5 9.16304 5.5 8.5C5.5 7.83696 5.76339 7.20107 6.23223 6.73223C6.70107 6.26339 7.33696 6 8 6H9V4H11V6H13.5V8H8C7.86739 8 7.74021 8.05268 7.64645 8.14645C7.55268 8.24021 7.5 8.36739 7.5 8.5C7.5 8.63261 7.55268 8.75979 7.64645 8.85355C7.74021 8.94732 7.86739 9 8 9H12C12.663 9 13.2989 9.26339 13.7678 9.73223C14.2366 10.2011 14.5 10.837 14.5 11.5C14.5 12.163 14.2366 12.7989 13.7678 13.2678C13.2989 13.7366 12.663 14 12 14H11V16H9V14H6.5V12Z"
          fill="url(#paint0_linear_115_13644)"
        />
        <defs>
          <linearGradient
            gradientUnits="userSpaceOnUse"
            id="paint0_linear_115_13644"
            x1="11.4806"
            x2="13.218"
            y1="18.7621"
            y2="18.664"
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
      height="20"
      style={style}
      viewBox="0 0 20 20"
      width="20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10 20C4.477 20 0 15.523 0 10C0 4.477 4.477 0 10 0C15.523 0 20 4.477 20 10C20 15.523 15.523 20 10 20ZM10 18C12.1217 18 14.1566 17.1571 15.6569 15.6569C17.1571 14.1566 18 12.1217 18 10C18 7.87827 17.1571 5.84344 15.6569 4.34315C14.1566 2.84285 12.1217 2 10 2C7.87827 2 5.84344 2.84285 4.34315 4.34315C2.84285 5.84344 2 7.87827 2 10C2 12.1217 2.84285 14.1566 4.34315 15.6569C5.84344 17.1571 7.87827 18 10 18V18ZM6.5 12H12C12.1326 12 12.2598 11.9473 12.3536 11.8536C12.4473 11.7598 12.5 11.6326 12.5 11.5C12.5 11.3674 12.4473 11.2402 12.3536 11.1464C12.2598 11.0527 12.1326 11 12 11H8C7.33696 11 6.70107 10.7366 6.23223 10.2678C5.76339 9.79893 5.5 9.16304 5.5 8.5C5.5 7.83696 5.76339 7.20107 6.23223 6.73223C6.70107 6.26339 7.33696 6 8 6H9V4H11V6H13.5V8H8C7.86739 8 7.74021 8.05268 7.64645 8.14645C7.55268 8.24021 7.5 8.36739 7.5 8.5C7.5 8.63261 7.55268 8.75979 7.64645 8.85355C7.74021 8.94732 7.86739 9 8 9H12C12.663 9 13.2989 9.26339 13.7678 9.73223C14.2366 10.2011 14.5 10.837 14.5 11.5C14.5 12.163 14.2366 12.7989 13.7678 13.2678C13.2989 13.7366 12.663 14 12 14H11V16H9V14H6.5V12Z"
        fill={style.fill ?? theme.palette.text.secondary}
      />
    </CustomSvgIcon>
  );
};

MoneyIcon.defaultProps = {
  isSelected: false,
  style: {},
};

MoneyIcon.propTypes = {
  isSelected: PropTypes.bool,
  style: PropTypes.objectOf(Object),
};