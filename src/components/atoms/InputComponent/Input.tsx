import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../../styles/theme';
import {
  StyledInput,
  StyledDiv,
  StyledParagraph,
  StyledErrorParagraph,
} from './Input.styled';

export interface InputProps {
  label?: string;
  placeholder?: string;
  width?: string;
  height?: string;
  alert?: boolean;
  errorMessage?: string;
  fontFamily?: string;
}

export const Input: React.FC<InputProps> = ({
  label,
  placeholder,
  width,
  height,
  alert,
  errorMessage,
  fontFamily,
}) => {
  return (
    <ThemeProvider theme={theme}>
      <StyledDiv>
        {label && <StyledParagraph>{label}</StyledParagraph>}
        <StyledInput
          placeholder={placeholder}
          width={width}
          height={height}
          alert={alert}
          errorMessage={errorMessage}
          fontFamily={fontFamily}
        />
        {alert && errorMessage && (
          <StyledErrorParagraph>{errorMessage}</StyledErrorParagraph>
        )}
      </StyledDiv>
    </ThemeProvider>
  );
};
