import React from 'react';
import { render, screen } from '@testing-library/react';
import { Button } from './Button';

describe('Button Component', () => {
  it('renders Button component with correct label', () => {
    render(<Button label="Click me" onClick={() => {}} />);
    const buttonElement = screen.getByText(/Click me/i);
    
    
    
    expect(buttonElement).toBeInTheDocument();
  });

  it('button click triggers the onClick event', () => {
    const handleClick = jest.fn();
    render(<Button label="Click me" onClick={handleClick} />);
    const buttonElement = screen.getByText(/Click me/i);
    buttonElement.click();
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
