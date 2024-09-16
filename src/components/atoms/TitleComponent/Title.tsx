import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme, themeColors } from '../../../styles/theme';
import { StyledTitle } from './Title.styled';

export interface TitleProps {
  label?: string;
  fontSize?: string;
  fontFamily?: string;
  bold?: boolean;
  color?: themeColors;
  degraded?: themeColors;
}

export const Title: React.FC<TitleProps> = ({
  label,
  fontSize,
  fontFamily,
  bold,
  color,
  degraded,
}) => {
  return (
    <ThemeProvider theme={theme}>
      <StyledTitle
        fontSize={fontSize}
        fontFamily={fontFamily}
        bold={bold}
        color={color}
        degraded={degraded}
      >
        {label}
      </StyledTitle>
    </ThemeProvider>
  );
};
