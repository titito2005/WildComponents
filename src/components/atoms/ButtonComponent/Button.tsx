import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme, themeColors } from '../../../styles/theme';
import { StyledButton } from './Button.styled';

export interface ButtonProps {
  rounded?: boolean;
  filled?: boolean;
  padding?: string;
  margin?: string;
  backgroungColor?: themeColors;
  hoverColor?: themeColors;
  color?: themeColors;
  children: React.ReactNode;
  onClick?: () => void;
}

export const Button: React.FC<ButtonProps> = ({
  rounded,
  filled,
  padding,
  margin,
  backgroungColor,
  hoverColor,
  color,
  children,
  onClick,
}) => {
  return (
    <ThemeProvider theme={theme}>
      <StyledButton
        rounded={rounded}
        filled={filled}
        padding={padding}
        margin={margin}
        backgroungColor={backgroungColor}
        hoverColor={hoverColor}
        color={color}
        onClick={onClick}
      >
        {children}
      </StyledButton>
    </ThemeProvider>
  );
};
