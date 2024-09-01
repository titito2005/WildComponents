import styled from 'styled-components';
import { ModalProps } from './Modal';

export const StyledModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  z-index: 1000;
`;

export const StyledModal = styled.div<ModalProps>`
  ${({ width = '30%', height = '60%', padding = '10%' }) => `
  position: relative;
  padding: ${padding};
  width: ${width};
  height: ${height};
  background: white;
  border-radius: 4px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  max-width: 90%;
  max-height: 90%;
  `}
`;

export const StyledCloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: transparent;
  border: none;
  font-size: 20px;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.light};
  &:hover {
    color: ${({ theme }) => theme.colors.grey};
  }
`;
