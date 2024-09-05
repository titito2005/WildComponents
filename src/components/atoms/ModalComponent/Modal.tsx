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
  allowClose?: boolean;
}

export const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  children,
  width,
  height,
  padding,
  allowClose = true,
}) => {
  if (!isOpen) return null;

  const handleGlobalClose = allowClose ? onClose : () => {};

  return (
    <ThemeProvider theme={theme}>
      <StyledModalWrapper
        data-testid={'modal-wrapper'}
        onClick={handleGlobalClose}
      >
        <StyledModal
          data-testid={'modal'}
          width={width}
          height={height}
          padding={padding}
        >
          <StyledCloseButton
            data-testid={'modal-close-button'}
            onClick={onClose}
          >
            x
          </StyledCloseButton>
          {children}
        </StyledModal>
      </StyledModalWrapper>
    </ThemeProvider>
  );
};
