import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { Dropdown } from './Dropdown';

describe('Dropdown Component', () => {
  const mockedOptions = [
    { id: '1', value: 'Option#1' },
    { id: '2', value: 'Option#2' },
  ];

  it('renders Dropdown component with correct label', () => {
    render(
      <Dropdown
        title={'test-dropdown'}
        options={mockedOptions}
        onClick={() => {}}
      />,
    );
    const dropDownButton = screen.getByTestId('dropdown-button-test-dropdown');
    expect(dropDownButton).toBeInTheDocument();
    fireEvent.click(dropDownButton);
    const firstOptionElement = screen.getByTestId('item-1');
    const lastOptionElement = screen.getByTestId('item-2');
    expect(firstOptionElement).toBeInTheDocument();
    expect(lastOptionElement).toBeInTheDocument();
  });
});
