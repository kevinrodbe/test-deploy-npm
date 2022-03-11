import { SvgIcon, styled } from '@material-ui/core';
import PropTypes from 'prop-types';
import React from 'react';
import { theme } from '../theme';

const CustomSvgIcon = styled(SvgIcon)((props: any) => ({
  ...props.style,
}));

export const XtrackerIcon = (props) => {
  const { style, isSelected } = props;

  if (isSelected) {
    return (
      <CustomSvgIcon
        fill="none"
        height="22"
        style={style}
        viewBox="0 0 21 22"
        width="21"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M17.8208 3.49156L16.6936 4.6418C17.7457 5.66421 18.5282 6.93102 18.9713 8.3292C19.4143 9.72737 19.5042 11.2134 19.2328 12.6547C18.9614 14.0961 18.3373 15.4478 17.4161 16.5894C16.4948 17.731 15.3052 18.6269 13.9532 19.1972C12.6013 19.7675 11.1291 19.9945 9.66803 19.8578C8.20697 19.7211 6.8025 19.2251 5.57991 18.414C4.35733 17.6029 3.35466 16.5019 2.66139 15.2092C1.96811 13.9166 1.60578 12.4726 1.60673 11.006C1.62255 8.79278 2.45777 6.66385 3.9513 5.02976C5.44484 3.39568 7.49089 2.3722 9.69484 2.15672V4.35779C8.18814 4.53853 6.78729 5.22457 5.72111 6.30383C4.65492 7.3831 3.98643 8.7918 3.82481 10.2998C3.66319 11.8079 4.01801 13.3261 4.8313 14.6066C5.64459 15.8871 6.86829 16.8541 8.30251 17.3496C9.73673 17.8452 11.2967 17.8401 12.7276 17.3351C14.1585 16.83 15.3758 15.855 16.1807 14.5692C16.9855 13.2834 17.3303 11.7629 17.1587 10.2559C16.9872 8.74897 16.3094 7.3447 15.2361 6.27248L14.0994 7.40852C14.9075 8.21681 15.4198 9.27339 15.5539 10.4081C15.688 11.5428 15.4361 12.6896 14.8387 13.6638C14.2414 14.638 13.3333 15.383 12.2609 15.7786C11.1884 16.1743 10.0138 16.1977 8.92641 15.8451C7.83898 15.4925 6.90195 14.7843 6.2662 13.8347C5.63046 12.8851 5.33301 11.7492 5.42174 10.6101C5.51048 9.47091 5.98024 8.39476 6.75537 7.5549C7.53051 6.71505 8.56591 6.16037 9.69484 5.98019V9.06878C9.24624 9.25466 8.87599 9.59023 8.64717 10.0183C8.41834 10.4464 8.3451 10.9406 8.43991 11.4166C8.53473 11.8926 8.79173 12.321 9.16715 12.6289C9.54257 12.9368 10.0132 13.1051 10.4988 13.1051C10.9844 13.1051 11.455 12.9368 11.8304 12.6289C12.2059 12.321 12.4629 11.8926 12.5577 11.4166C12.6525 10.9406 12.5793 10.4464 12.3504 10.0183C12.1216 9.59023 11.7514 9.25466 11.3028 9.06878V0.5L10.1815 0.516567C8.1193 0.579115 6.12124 1.24746 4.43684 2.43814C2.75244 3.62881 1.45633 5.28906 0.710365 7.21154C-0.0355942 9.13402 -0.198344 11.2335 0.24244 13.2479C0.683224 15.2623 1.70801 17.1022 3.18882 18.538C4.66963 19.9738 6.54084 20.9417 8.56877 21.321C10.5967 21.7002 12.6915 21.474 14.5915 20.6705C16.4916 19.867 18.1127 18.5218 19.2524 16.803C20.3921 15.0842 20.9999 13.0679 21 11.006C21.0037 9.60394 20.7242 8.21559 20.1781 6.92415C19.632 5.63271 18.8307 4.46478 17.822 3.49038"
          fill="url(#paint0_linear_115_13652)"
        />
        <defs>
          <linearGradient
            gradientUnits="userSpaceOnUse"
            id="paint0_linear_115_13652"
            x1="3.70375"
            x2="27.0081"
            y1="23.0211"
            y2="7.56784"
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
      height="22"
      style={style}
      viewBox="0 0 21 22"
      width="21"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M17.8208 3.49156L16.6936 4.6418C17.7457 5.66421 18.5282 6.93102 18.9713 8.3292C19.4143 9.72737 19.5042 11.2134 19.2328 12.6547C18.9614 14.0961 18.3373 15.4478 17.4161 16.5894C16.4948 17.731 15.3052 18.6269 13.9532 19.1972C12.6013 19.7675 11.1291 19.9945 9.66803 19.8578C8.20697 19.7211 6.8025 19.2251 5.57991 18.414C4.35733 17.6029 3.35466 16.5019 2.66139 15.2092C1.96811 13.9166 1.60578 12.4726 1.60673 11.006C1.62255 8.79278 2.45777 6.66385 3.9513 5.02976C5.44484 3.39568 7.49089 2.3722 9.69484 2.15672V4.35779C8.18814 4.53853 6.78729 5.22457 5.72111 6.30383C4.65492 7.3831 3.98643 8.7918 3.82481 10.2998C3.66319 11.8079 4.01801 13.3261 4.8313 14.6066C5.64459 15.8871 6.86829 16.8541 8.30251 17.3496C9.73673 17.8452 11.2967 17.8401 12.7276 17.3351C14.1585 16.83 15.3758 15.855 16.1807 14.5692C16.9855 13.2834 17.3303 11.7629 17.1587 10.2559C16.9872 8.74897 16.3094 7.3447 15.2361 6.27248L14.0994 7.40852C14.9075 8.21681 15.4198 9.27339 15.5539 10.4081C15.688 11.5428 15.4361 12.6896 14.8387 13.6638C14.2414 14.638 13.3333 15.383 12.2609 15.7786C11.1884 16.1743 10.0138 16.1977 8.92641 15.8451C7.83898 15.4925 6.90195 14.7843 6.2662 13.8347C5.63046 12.8851 5.33301 11.7492 5.42174 10.6101C5.51048 9.47091 5.98024 8.39476 6.75537 7.5549C7.53051 6.71505 8.56591 6.16037 9.69484 5.98019V9.06878C9.24624 9.25466 8.87599 9.59023 8.64717 10.0183C8.41834 10.4464 8.3451 10.9406 8.43991 11.4166C8.53473 11.8926 8.79173 12.321 9.16715 12.6289C9.54257 12.9368 10.0132 13.1051 10.4988 13.1051C10.9844 13.1051 11.455 12.9368 11.8304 12.6289C12.2059 12.321 12.4629 11.8926 12.5577 11.4166C12.6525 10.9406 12.5793 10.4464 12.3504 10.0183C12.1216 9.59023 11.7514 9.25466 11.3028 9.06878V0.5L10.1815 0.516567C8.1193 0.579115 6.12124 1.24746 4.43684 2.43814C2.75244 3.62881 1.45633 5.28906 0.710365 7.21154C-0.0355942 9.13402 -0.198344 11.2335 0.24244 13.2479C0.683224 15.2623 1.70801 17.1022 3.18882 18.538C4.66963 19.9738 6.54084 20.9417 8.56877 21.321C10.5967 21.7002 12.6915 21.474 14.5915 20.6705C16.4916 19.867 18.1127 18.5218 19.2524 16.803C20.3921 15.0842 20.9999 13.0679 21 11.006C21.0037 9.60394 20.7242 8.21559 20.1781 6.92415C19.632 5.63271 18.8307 4.46478 17.822 3.49038"
        fill={theme.palette.text.secondary}
      />
    </CustomSvgIcon>
  );
};

XtrackerIcon.defaultProps = {
  isSelected: false,
  style: {},
};

XtrackerIcon.propTypes = {
  isSelected: PropTypes.bool,
  style: PropTypes.objectOf(Object),
};
