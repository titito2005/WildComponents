import React from 'react';
import { StyledOverlay, StyledLoader } from './Loader.styled';

export interface LoaderProps {
  isLoading?: boolean;
  height?: string;
  width?: string;
  border?: string;
}

export const Loader: React.FC<LoaderProps> = ({
  isLoading,
  height,
  width,
  border,
}) => {
  if (!isLoading) return null;
  return (
    <StyledOverlay>
      <StyledLoader
        data-testid={'loader'}
        height={height}
        width={width}
        border={border}
      />
    </StyledOverlay>
  );
};
