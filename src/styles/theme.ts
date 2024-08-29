export const theme = {
  colors: {
    '50': '#f0f6fe',
    '100': '#deeafb',
    '200': '#c5dcf8',
    '300': '#9dc6f3',
    '400': '#6ea6ec',
    '500': '#4c86e5',
    '600': '#376ad9',
    '700': '#2e56c7',
    '800': '#2b47a2',
    '900': '#283f80',
    '950': '#1e2a52',
    white: '#FFFFFF',
    black: '#000000',
    light: '#BCBCBC',
    alert: '#d5401f',
    success: '#37b04d',
  },
};

export type themeColors = keyof typeof theme.colors;
