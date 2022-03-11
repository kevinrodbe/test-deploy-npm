import { SvgIcon, styled } from '@material-ui/core';
import React from 'react';
import { theme } from '../theme';

const CustomSvgIcon = styled(SvgIcon)((props: any) => ({
  height: 16,
  width: 16,
  ...props.style,
}));

export const CheckboxIcon = (props) => {
  const { style, isChecked, dataQa } = props;

  if (isChecked) {
    return (
      <CustomSvgIcon
        data-qa={dataQa}
        fill="none"
        height="16"
        style={style}
        viewBox="0 0 16 16"
        width="16"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 2C0 0.895431 0.895431 0 2 0H14C15.1046 0 16 0.895431 16 2V14C16 15.1046 15.1046 16 14 16H2C0.895431 16 0 15.1046 0 14V2Z"
          fill="url(#paint0_linear_181_5091)"
        />
        <path
          clipRule="evenodd"
          d="M12.0241 5.17579C12.1366 5.28831 12.1997 5.4409 12.1997 5.59999C12.1997 5.75909 12.1366 5.91168 12.0241 6.02419L7.22408 10.8242C7.11156 10.9367 6.95898 10.9999 6.79988 10.9999C6.64078 10.9999 6.48819 10.9367 6.37568 10.8242L3.97568 8.42419C3.86638 8.31103 3.80591 8.15947 3.80727 8.00215C3.80864 7.84484 3.87174 7.69435 3.98299 7.5831C4.09423 7.47186 4.24472 7.40876 4.40204 7.40739C4.55936 7.40602 4.71092 7.4665 4.82408 7.57579L6.79988 9.55159L11.1757 5.17579C11.2882 5.06331 11.4408 5.00012 11.5999 5.00012C11.759 5.00012 11.9116 5.06331 12.0241 5.17579Z"
          fill="white"
          fillRule="evenodd"
        />
        <defs>
          <linearGradient
            gradientUnits="userSpaceOnUse"
            id="paint0_linear_181_5091"
            x1="1.52"
            x2="20.8898"
            y1="17.576"
            y2="4.73171"
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
      data-qa={dataQa}
      fill="none"
      height="16"
      style={style}
      viewBox="0 0 16 16"
      width="16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect fill="white" height="15" rx="1.5" stroke={theme.palette.grey?.[600]} width="15" x="0.5" y="0.5" />
    </CustomSvgIcon>
  );
};

// CheckboxIcon.defaultProps = {
//   dataQa: '',
//   isChecked: false,
//   style: {},
// };

// CheckboxIcon.propTypes = {
//   dataQa: PropTypes.string,
//   isChecked: PropTypes.bool,
//   style: PropTypes.objectOf(Object),
// };
