import React from 'react';

import { SvgIcon, styled } from '@material-ui/core';
import PropTypes from 'prop-types';
import { theme } from '../theme';

const CustomSvgIcon = styled(SvgIcon)((props: any) => ({
  ...props.style,
}));

export const OrdersIcon = (props) => {
  const { style, isSelected } = props;

  if (isSelected) {
    return (
      <CustomSvgIcon
        fill="none"
        height="24"
        style={style}
        viewBox="0 0 24 24"
        width="24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M6.27889 19.5882C5.94021 19.5882 5.61732 19.5993 5.29557 19.5882C4.66423 19.5499 4.07265 19.274 3.64493 18.8184C3.21721 18.3628 2.98662 17.763 3.00155 17.1448C3.00946 15.5236 3.00155 13.9025 3.00155 12.2813C3.00155 9.67308 3.00155 7.06523 3.00155 4.45778C2.98309 3.95569 3.12965 3.46104 3.41978 3.04634C3.70991 2.63164 4.12833 2.31873 4.61368 2.15347C4.90008 2.05807 5.20075 2.00996 5.50332 2.01111C7.38868 1.99786 9.27515 2.00337 11.1605 2.00006C11.2763 1.9987 11.3912 2.02097 11.4977 2.06543C11.6042 2.1099 11.7001 2.17559 11.7792 2.25831C12.4806 2.94843 13.184 3.63634 13.8892 4.32205C13.943 4.36959 14.012 4.39728 14.0845 4.40039C14.4608 4.40701 14.8349 4.40701 15.2067 4.40039C15.3344 4.39582 15.4615 4.418 15.5797 4.46539C15.6979 4.51278 15.8044 4.58432 15.892 4.67521C17.4936 6.24748 19.0978 7.8168 20.7047 9.38319C20.7985 9.46724 20.8732 9.56961 20.924 9.68367C20.9747 9.79774 21.0004 9.92097 20.9993 10.0454C20.9956 13.2134 20.9956 16.3819 20.9993 19.5507C21.007 19.8732 20.9479 20.194 20.8256 20.4936C20.7032 20.7932 20.5202 21.0655 20.2875 21.2943C20.0547 21.523 19.7772 21.7034 19.4713 21.8246C19.1655 21.9458 18.8377 22.0054 18.5077 21.9996C15.2526 21.9996 11.9974 21.9996 8.74228 21.9996C8.14582 22.0055 7.56796 21.7968 7.11872 21.4132C6.66948 21.0296 6.38023 20.4979 6.30601 19.9193C6.28907 19.8233 6.28905 19.7218 6.27889 19.5882ZM14.4819 5.97635C14.4198 5.97635 14.3826 5.96864 14.3453 5.96864C12.4931 5.96864 10.6404 5.96864 8.78745 5.96864C8.66597 5.95926 8.54386 5.97597 8.42969 6.01761C8.31552 6.05924 8.21205 6.12479 8.12654 6.20965C8.04102 6.2945 7.97554 6.3966 7.93467 6.50882C7.89379 6.62104 7.8785 6.74062 7.88991 6.85922C7.88991 11.0838 7.88991 15.3084 7.88991 19.533C7.87826 19.6539 7.894 19.7758 7.93605 19.89C7.97809 20.0042 8.04539 20.108 8.13315 20.1939C8.22091 20.2798 8.32698 20.3457 8.44378 20.387C8.56058 20.4282 8.68523 20.4437 8.80888 20.4325H18.4603C18.5876 20.445 18.7161 20.4297 18.8365 20.3875C18.9569 20.3453 19.0662 20.2773 19.1563 20.1886C19.2464 20.0999 19.3151 19.9926 19.3574 19.8746C19.3997 19.7566 19.4145 19.6309 19.4008 19.5066C19.4008 16.6534 19.4008 13.8002 19.4008 10.947V10.7792H19.2043C17.9342 10.7792 16.6642 10.7792 15.3952 10.7792C15.235 10.7831 15.0757 10.7538 14.9278 10.6932C14.7803 10.6256 14.6577 10.5151 14.5769 10.3768C14.496 10.2385 14.4609 10.0792 14.4763 9.92064C14.4763 8.66584 14.4763 7.40995 14.4763 6.15515L14.4819 5.97635ZM10.3736 3.57161C10.3398 3.57161 10.3127 3.56386 10.2856 3.56386C8.67455 3.56386 7.06352 3.56386 5.4525 3.56386C5.33405 3.56486 5.2171 3.58994 5.10908 3.63748C5.00106 3.68502 4.90435 3.754 4.82505 3.84003C4.74575 3.92606 4.6856 4.02726 4.64844 4.13722C4.61128 4.24718 4.59789 4.36348 4.60916 4.47876C4.60916 8.68497 4.60916 12.8912 4.60916 17.0974C4.60916 17.1482 4.60916 17.1989 4.60916 17.2497C4.61214 17.4299 4.68034 17.6033 4.80165 17.7391C4.92297 17.8748 5.08956 17.9642 5.27187 17.9913C5.60633 18.0136 5.94188 18.0162 6.27665 17.999V17.8225C6.27665 14.1806 6.28681 10.5387 6.27665 6.89677C6.25405 6.28163 6.47418 5.68149 6.8915 5.22055C7.30882 4.7596 7.89139 4.47309 8.51875 4.42026C8.98952 4.38274 9.46594 4.40703 9.93897 4.40372H10.3714L10.3736 3.57161ZM16.0929 7.13182V9.20331H18.221L16.0929 7.13182Z"
          fill="url(#paint0_linear_232_7735)"
        />
        <path
          d="M17 15H10"
          stroke="url(#paint1_linear_232_7735)"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
        />
        <path
          d="M17 18H10"
          stroke="url(#paint2_linear_232_7735)"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
        />
        <path
          d="M12 12H10"
          stroke="url(#paint3_linear_232_7735)"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
        />
        <defs>
          <linearGradient
            gradientUnits="userSpaceOnUse"
            id="paint0_linear_232_7735"
            x1="4.71"
            x2="27.8435"
            y1="23.97"
            y2="10.164"
          >
            <stop stopColor="#D9732D" />
            <stop offset="0.470306" stopColor="#DF5B5B" />
            <stop offset="0.981571" stopColor="#C721DF" />
          </linearGradient>
          <linearGradient
            gradientUnits="userSpaceOnUse"
            id="paint1_linear_232_7735"
            x1="10.665"
            x2="11.2061"
            y1="16.0985"
            y2="13.5866"
          >
            <stop stopColor="#D9732D" />
            <stop offset="0.470306" stopColor="#DF5B5B" />
            <stop offset="0.981571" stopColor="#C721DF" />
          </linearGradient>
          <linearGradient
            gradientUnits="userSpaceOnUse"
            id="paint2_linear_232_7735"
            x1="10.665"
            x2="11.2061"
            y1="19.0985"
            y2="16.5866"
          >
            <stop stopColor="#D9732D" />
            <stop offset="0.470306" stopColor="#DF5B5B" />
            <stop offset="0.981571" stopColor="#C721DF" />
          </linearGradient>
          <linearGradient
            gradientUnits="userSpaceOnUse"
            id="paint3_linear_232_7735"
            x1="10.19"
            x2="11.4535"
            y1="13.0985"
            y2="11.4228"
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
      height="24"
      style={style}
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.27889 19.5882C5.94021 19.5882 5.61732 19.5993 5.29557 19.5882C4.66423 19.5499 4.07265 19.274 3.64493 18.8184C3.21721 18.3628 2.98662 17.763 3.00155 17.1448C3.00946 15.5236 3.00155 13.9025 3.00155 12.2813C3.00155 9.67308 3.00155 7.06523 3.00155 4.45778C2.98309 3.95569 3.12965 3.46104 3.41978 3.04634C3.70991 2.63164 4.12833 2.31873 4.61368 2.15347C4.90008 2.05807 5.20075 2.00996 5.50332 2.01111C7.38868 1.99786 9.27515 2.00337 11.1605 2.00006C11.2763 1.9987 11.3912 2.02097 11.4977 2.06543C11.6042 2.1099 11.7001 2.17559 11.7792 2.25831C12.4806 2.94843 13.184 3.63634 13.8892 4.32205C13.943 4.36959 14.012 4.39728 14.0845 4.40039C14.4608 4.40701 14.8349 4.40701 15.2067 4.40039C15.3344 4.39582 15.4615 4.418 15.5797 4.46539C15.6979 4.51278 15.8044 4.58432 15.892 4.67521C17.4936 6.24748 19.0978 7.8168 20.7047 9.38319C20.7985 9.46724 20.8732 9.56961 20.924 9.68367C20.9747 9.79774 21.0004 9.92097 20.9993 10.0454C20.9956 13.2134 20.9956 16.3819 20.9993 19.5507C21.007 19.8732 20.9479 20.194 20.8256 20.4936C20.7032 20.7932 20.5202 21.0655 20.2875 21.2943C20.0547 21.523 19.7772 21.7034 19.4713 21.8246C19.1655 21.9458 18.8377 22.0054 18.5077 21.9996C15.2526 21.9996 11.9974 21.9996 8.74228 21.9996C8.14582 22.0055 7.56796 21.7968 7.11872 21.4132C6.66948 21.0296 6.38023 20.4979 6.30601 19.9193C6.28907 19.8233 6.28905 19.7218 6.27889 19.5882ZM14.4819 5.97635C14.4198 5.97635 14.3826 5.96864 14.3453 5.96864C12.4931 5.96864 10.6404 5.96864 8.78745 5.96864C8.66597 5.95926 8.54386 5.97597 8.42969 6.01761C8.31552 6.05924 8.21205 6.12479 8.12654 6.20965C8.04102 6.2945 7.97554 6.3966 7.93467 6.50882C7.89379 6.62104 7.8785 6.74062 7.88991 6.85922C7.88991 11.0838 7.88991 15.3084 7.88991 19.533C7.87826 19.6539 7.894 19.7758 7.93605 19.89C7.97809 20.0042 8.04539 20.108 8.13315 20.1939C8.22091 20.2798 8.32698 20.3457 8.44378 20.387C8.56058 20.4282 8.68523 20.4437 8.80888 20.4325H18.4603C18.5876 20.445 18.7161 20.4297 18.8365 20.3875C18.9569 20.3453 19.0662 20.2773 19.1563 20.1886C19.2464 20.0999 19.3151 19.9926 19.3574 19.8746C19.3997 19.7566 19.4145 19.6309 19.4008 19.5066C19.4008 16.6534 19.4008 13.8002 19.4008 10.947V10.7792H19.2043C17.9342 10.7792 16.6642 10.7792 15.3952 10.7792C15.235 10.7831 15.0757 10.7538 14.9278 10.6932C14.7803 10.6256 14.6577 10.5151 14.5769 10.3768C14.496 10.2385 14.4609 10.0792 14.4763 9.92064C14.4763 8.66584 14.4763 7.40995 14.4763 6.15515L14.4819 5.97635ZM10.3736 3.57161C10.3398 3.57161 10.3127 3.56386 10.2856 3.56386C8.67455 3.56386 7.06352 3.56386 5.4525 3.56386C5.33405 3.56486 5.2171 3.58994 5.10908 3.63748C5.00106 3.68502 4.90435 3.754 4.82505 3.84003C4.74575 3.92606 4.6856 4.02726 4.64844 4.13722C4.61128 4.24718 4.59789 4.36348 4.60916 4.47876C4.60916 8.68497 4.60916 12.8912 4.60916 17.0974C4.60916 17.1482 4.60916 17.1989 4.60916 17.2497C4.61214 17.4299 4.68034 17.6033 4.80165 17.7391C4.92297 17.8748 5.08956 17.9642 5.27187 17.9913C5.60633 18.0136 5.94188 18.0162 6.27665 17.999V17.8225C6.27665 14.1806 6.28681 10.5387 6.27665 6.89677C6.25405 6.28163 6.47418 5.68149 6.8915 5.22055C7.30882 4.7596 7.89139 4.47309 8.51875 4.42026C8.98952 4.38274 9.46594 4.40703 9.93897 4.40372H10.3714L10.3736 3.57161ZM16.0929 7.13182V9.20331H18.221L16.0929 7.13182Z"
        fill={theme.palette.text.secondary}
      />
      <path
        d="M17 15H10"
        stroke={theme.palette.text.secondary}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <path
        d="M17 18H10"
        stroke={theme.palette.text.secondary}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <path
        d="M12 12H10"
        stroke={theme.palette.text.secondary}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </CustomSvgIcon>
  );
};
OrdersIcon.defaultProps = {
  isSelected: false,
  style: {},
};

OrdersIcon.propTypes = {
  isSelected: PropTypes.bool,
  style: PropTypes.objectOf(Object),
};
