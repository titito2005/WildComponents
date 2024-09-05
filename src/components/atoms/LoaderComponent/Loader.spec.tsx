import React from 'react';
import { render, screen } from '@testing-library/react';
import { Loader } from './Loader';

describe('Loader Component', () => {
  it('renders Loader component', () => {
    render(<Loader isLoading={true} />);
    const loader = screen.getByTestId('loader');
    expect(loader).toBeInTheDocument();
  });

  it('shoould not render Loader component', () => {
    render(<Loader isLoading={false} />);
    const loader = screen.queryByTestId('loader');
    expect(loader).toBeNull();
  });
});
