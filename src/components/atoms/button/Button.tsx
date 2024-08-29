import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme, themeColors } from '../../../styles/theme';
import { Basebutton } from './Button.styled';

export interface BaseButtonProps {
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

export const Button: React.FC<BaseButtonProps> = ({
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
      <Basebutton
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
      </Basebutton>
    </ThemeProvider>
  );
};
