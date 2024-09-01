import React from 'react';
import {
  StyledModal,
  StyledCloseButton,
  StyledModalWrapper,
} from './Modal.styled';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../../styles/theme';

export interface ModalProps {
  isOpen?: boolean;
  onClose?: () => void;
  children: React.ReactNode;
  width?: string;
  height?: string;
  padding?: string;
}

export const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  children,
  width,
  height,
  padding,
}) => {
  if (!isOpen) return null;
  return (
    <ThemeProvider theme={theme}>
      <StyledModalWrapper onClick={onClose}>
        <StyledModal width={width} height={height} padding={padding}>
          <StyledCloseButton onClick={onClose}>x</StyledCloseButton>
          {children}
        </StyledModal>
      </StyledModalWrapper>
    </ThemeProvider>
  );
};
