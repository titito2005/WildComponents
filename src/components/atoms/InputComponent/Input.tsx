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
  value?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
}

export const Input: React.FC<InputProps> = ({
  label,
  placeholder,
  width,
  height,
  alert,
  errorMessage,
  fontFamily,
  value,
  onChange,
}) => {
  return (
    <ThemeProvider theme={theme}>
      <StyledDiv>
        {label && <StyledParagraph>{label}</StyledParagraph>}
        <StyledInput
          data-testid={'input-field'}
          placeholder={placeholder}
          width={width}
          height={height}
          alert={alert}
          errorMessage={errorMessage}
          fontFamily={fontFamily}
          value={value}
          onChange={onChange}
        />
        {alert && errorMessage && (
          <StyledErrorParagraph>{errorMessage}</StyledErrorParagraph>
        )}
      </StyledDiv>
    </ThemeProvider>
  );
};
