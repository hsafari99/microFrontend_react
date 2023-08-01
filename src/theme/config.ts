import { alpha, rgbToHex, PaletteMode } from '@mui/material';
import { ThemeOptions, createTheme } from '@mui/material/styles';

const mode:PaletteMode = 'light';

const augmentColor = (color:string): string => color;
const getContrastText = (color: string): string => color;
const palette = {
    mode,
    common: {
        black: '#000',
        white: '#fff',
    },
    primary: {
        main: '#1976d2',
        light: '#42a5f5',
        dark: '#1565c0',
        contrastText: '#fff',
    },
    secondary: {
        light: '#ff7961',
        main: '#f44336',
        dark: '#ba000d',
        contrastText: '#fff',
    },
    error: {
        main: '#d32f2f',
        light: '#ef5350',
        dark: '#c62828',
        contrastText: '#fff',
    },
    warning: {
        main: '#ed6c02',
        light: '#ff9800',
        dark: '#e65100',
        contrastText: '#fff',
    },
    info: {
        main: '#0288d1',
        light: '#03a9f4',
        dark: '#01579b',
        contrastText: '#fff',
    },
    success: {
        main: '#2e7d32',
        light: '#4caf50',
        dark: '#1b5e20',
        contrastText: '#fff',
    },
    grey: {
        50: '#fafafa',
        100: '#f5f5f5',
        200: '#eee',
        300: '#e0e0e0',
        400: '#bdbdbd',
        500: '#9e9e9e',
        600: '#757575',
        700: '#616161',
        800: '#424242',
        900: '#212121',
        A100: '#f5f5f5',
        A200: '#eee',
        A400: '#bdbdbd',
        A700: '#616161',
    },
    text: {
        primary: alpha(rgbToHex('rgb(0, 0, 0)'), 0.87),
        secondary: alpha(rgbToHex('rgb(0, 0, 0)'), 0.6),
        disabled: alpha(rgbToHex('rgb(0, 0, 0)'), 0.127),
    },
    divider: alpha(rgbToHex('rgb(0, 0, 0)'), 0.12),
    background: {
        paper: '#fff',
        default: '#fff',
    },
    contrastThreshold: 3,
    tonalOffset: 0.2,
    action: {
        active: alpha(rgbToHex('rgb(0, 0, 0)'), 0.54),
        hover: alpha(rgbToHex('rgb(0, 0, 0)'), 0.04),
        hoverOpacity: 0.04,
        selected: alpha(rgbToHex('rgb(0, 0, 0)'), 0.08),
        selectedOpacity: 0.08,
        disabled: alpha(rgbToHex('rgb(0, 0, 0)'), 0.26),
        disabledBackground: alpha(rgbToHex('rgb(0, 0, 0)'), 0.12),
        disabledOpacity: 0.38,
        focus: alpha(rgbToHex('rgb(0, 0, 0)'), 0.12),
        focusOpacity: 0.12,
        activatedOpacity: 0.12,
    },
    augmentColor,
    getContrastText,
};

const typography = {
    fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
    ].join(','),
    htmlFontSize: 16,
    fontSize: 12,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
    // pxToRm: () => {},
};
const shape = {
    borderRadius: 4,
};

const spacing = (multiplier: number = 4, unit: 'rem'|'em'|'px' = 'px') => (factor:number) => `${multiplier * factor}${unit}`;

const breakpoints = {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
};

const zIndex = {
    mobileStepper: 1000,
    fab: 1050,
    speedDial: 1050,
    appBar: 1100,
    drawer: 1200,
    modal: 1300,
    snackbar: 1400,
    tooltip: 1500,
};

const theme:ThemeOptions = {
    palette,
    typography,
    spacing: spacing(),
    breakpoints,
    shape,
    zIndex,
};
export default createTheme(theme);