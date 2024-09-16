import React from 'react';
import { render, screen } from '@testing-library/react';
import { Title } from './Title';

describe('Title Component', () => {
  it('renders Title component with correct label', () => {
    render(<Title label="Title" />);
    const titleElement = screen.getByText(/Title/i);
    expect(titleElement).toBeInTheDocument();
  });
});
