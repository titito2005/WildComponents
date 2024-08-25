import React from 'react';
import { PrettyButton } from './Button.styled';

interface ButtonProps {
  label: string;
  onClick: () => void;
}

export const Button: React.FC<ButtonProps> = ({ label, onClick }) => {
  return <PrettyButton onClick={onClick}>{label}</PrettyButton>;
};
