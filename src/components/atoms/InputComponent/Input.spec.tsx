import React from 'react';
import { render, screen } from '@testing-library/react';
import { Input } from './Input';

describe('Input Component', () => {
  it('renders Input component with correct label', () => {
    render(<Input label="Title" placeholder="Placeholder" />);
    const inputElement = screen.getByText(/Title/i);
    expect(inputElement).toBeInTheDocument();
  });

  it('renders the error message', () => {
    render(
      <Input
        label="Title"
        placeholder="Placeholder"
        errorMessage="Error"
        alert={true}
      />,
    );
    const errorElement = screen.getByText(/ERROR/i);
    expect(errorElement).toBeInTheDocument();
  });
});
