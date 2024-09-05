import styled from 'styled-components';
import { theme } from '../../../styles/theme';
import { LoaderProps } from './Loader';

export const StyledOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: transparent;
  z-index: 9999;   

`;

export const StyledLoader = styled.div<LoaderProps>`
  ${({ width = '35px', height = '35px', border = '10px' }) => `
  border: ${border} solid ${theme.colors[200]};
  border-top: ${border} solid ${theme.colors[500]};
  border-radius: 50%;
  width: ${width};
  height: ${height};
  animation: spin 1.2s linear infinite;

  @keyframes spin {
    0% { transform: rotate(0deg);   
 }
    100% { transform: rotate(360deg);   
 }
  }
  `}
`;
