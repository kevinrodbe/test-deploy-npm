import { Overrides } from '@material-ui/core/styles/overrides';

import { palette } from './palette';

export const overrides: Overrides = {
  MuiButton: {
    root: {
      borderRadius: 35,
      boxShadow: 'none !important',
      textTransform: 'none',
    },
  },
  MuiCheckbox: {
    root: {
      padding: '5px',
    },
  },
  MuiChip: {
    clickable: {
      '&:active': {
        boxShadow: 0,
      },
    },
  },
  MuiDrawer: {
    paper: {
      background: palette.background.paper,
    },
  },
  MuiFormHelperText: {
    root: {
      fontWeight: 600,
    },
  },
  MuiIconButton: {
    colorPrimary: {
      '&:hover': {
        backgroundColor: palette.background.gradient,
      },
    },
    colorSecondary: {
      '&:hover': {
        backgroundColor: palette.background.gradient,
      },
    },
    root: {
      '&.Mui-disabled': {
        color: palette.text.disabled,
      },
      color: palette.text.primary,
      padding: 5,
    },
    sizeSmall: {
      '& .MuiSvgIcon-root': {
        fontSize: 16,
      },
    },
  },
  MuiInputAdornment: {
    marginDense: {
      '& .MuiSvgIcon-root': {
        fontSize: 16,
      },
    },
    root: {
      color: palette.grey?.[600],
    },
  },
  MuiInputLabel: {
    marginDense: {
      transform: 'translate(14px, 4px) scale(1) !important',
    },
    outlined: {
      transform: 'translate(14px, 12px) scale(1)',
    },
    shrink: {
      transform: 'translate(14px, -6px) scale(0.75) !important',
    },
  },
  MuiOutlinedInput: {
    input: {
      padding: '10.5px 14px',
    },
    inputMarginDense: {
      paddingBottom: 5,
      paddingTop: 5,
    },
    root: {
      '& .Mui-disabled': {
        background: palette.grey?.[200],
        borderRadius: 40,
      },
      '& fieldset': {
        borderRadius: '40px',
      },
      '& input:valid + fieldset': {
        borderColor: palette.grey?.[500],
      },
      '&:hover': {
        borderColor: `${palette.grey?.[800]} !important`,
      },
    },
  },
  MuiSelect: {
    selectMenu: {
      minHeight: 15,
    },
  },
  MuiSvgIcon: {
    colorAction: {
      color: palette.text.primary,
    },
    colorDisabled: {
      color: palette.text.disabled,
    },
    fontSizeSmall: {
      fontSize: 16,
    },
  },
  MuiTableCell: {
    head: {
      color: palette.text.primary,
    },
  },
  MuiTableRow: {
    footer: {
      '&:hover': {
        backgroundColor: `${palette.grey?.[100]} !important`,
      },
      display: 'flex',
      justifyContent: 'center',
    },
    root: {
      '&:hover': {
        '& .MuiStepConnector-line': {
          background: `${palette.grey?.[300]} !important`,
        },
        backgroundColor: `${palette.grey?.[200]} !important`,
      },
      transition: 'unset !important',
    },
  },
  MuiTextField: {
    root: {
      marginBottom: 15,
      nativeInput: {
        boxSizing: 'inherit',
      },
    },
  },
  MuiTooltip: {
    tooltip: {
      backgroundColor: palette.grey?.[800],
      fontSize: 10,
    },
  },
};
