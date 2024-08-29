import React from 'react';
import { render, screen } from '@testing-library/react';
import { Header } from './Header';

describe('Header Component', () => {
  it('renders Header component with correct label', () => {
    render(<Header label="Title" />);
    const headerElement = screen.getByText(/Title/i);
    expect(headerElement).toBeInTheDocument();
  });
});
