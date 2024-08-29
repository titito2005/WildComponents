import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme, themeColors } from '../../../styles/theme';
import { StyledButton } from './Button.styled';

export interface ButtonProps {
  label?: string;
  rounded?: boolean;
  filled?: boolean;
  padding?: string;
  margin?: string;
  backgroungColor?: themeColors;
  hoverColor?: themeColors;
  color?: themeColors;
  onClick?: () => void;
}

export const Button: React.FC<ButtonProps> = ({
  label,
  rounded,
  filled,
  padding,
  margin,
  backgroungColor,
  hoverColor,
  color,
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
        {label}
      </StyledButton>
    </ThemeProvider>
  );
};
