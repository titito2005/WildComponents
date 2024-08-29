import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme, themeColors } from '../../../styles/theme';
import { StyledHeader } from './Header.styled';

export interface HeaderProps {
  label?: string;
  fontSize?: string;
  fontFamily?: string;
  bold?: boolean;
  color?: themeColors;
  degraded?: themeColors;
}

export const Header: React.FC<HeaderProps> = ({
  label,
  fontSize,
  fontFamily,
  bold,
  color,
  degraded,
}) => {
  return (
    <ThemeProvider theme={theme}>
      <StyledHeader
        fontSize={fontSize}
        fontFamily={fontFamily}
        bold={bold}
        color={color}
        degraded={degraded}
      >
        {label}
      </StyledHeader>
    </ThemeProvider>
  );
};
