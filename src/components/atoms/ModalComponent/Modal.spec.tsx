import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { Modal } from './Modal';

describe('Modal Component', () => {
  const mockOnClose = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders Modal component with children', () => {
    render(
      <Modal isOpen={true} onClose={mockOnClose}>
        <p>children</p>
      </Modal>,
    );
    const modalWrapper = screen.getByTestId('modal-wrapper');
    expect(modalWrapper).toBeInTheDocument();
    const modal = screen.getByTestId('modal');
    expect(modal).toBeInTheDocument();
    const modalCloseButton = screen.getByTestId('modal-close-button');
    expect(modalCloseButton).toBeInTheDocument();
    const childrenElement = screen.getByText(/children/i);
    expect(childrenElement).toBeInTheDocument();
  });

  it('should not renders Modal component', () => {
    render(
      <Modal isOpen={false} onClose={mockOnClose}>
        <p>children</p>
      </Modal>,
    );
    const modalWrapper = screen.queryByTestId('modal-wrapper');
    expect(modalWrapper).toBeNull();
    const modal = screen.queryByTestId('modal');
    expect(modal).toBeNull();
    const modalCloseButton = screen.queryByTestId('modal-close-button');
    expect(modalCloseButton).toBeNull();
  });

  it('should call the onClose function (click close button)', () => {
    render(
      <Modal isOpen={true} onClose={mockOnClose}>
        <p>children</p>
      </Modal>,
    );
    const modalCloseButton = screen.getByTestId('modal-close-button');
    expect(modalCloseButton).toBeInTheDocument();
    fireEvent.click(modalCloseButton);
    expect(mockOnClose).toHaveBeenCalled();
  });

  it('should call the onClose function (click modal wrapper)', () => {
    render(
      <Modal isOpen={true} onClose={mockOnClose}>
        <p>children</p>
      </Modal>,
    );
    const modalWrapper = screen.getByTestId('modal-wrapper');
    expect(modalWrapper).toBeInTheDocument();
    fireEvent.click(modalWrapper);
    expect(mockOnClose).toHaveBeenCalled();
  });

  it('should not call the onClose function (click modal wrapper)', () => {
    render(
      <Modal isOpen={true} onClose={mockOnClose} allowClose={false}>
        <p>children</p>
      </Modal>,
    );
    const modalWrapper = screen.getByTestId('modal-wrapper');
    expect(modalWrapper).toBeInTheDocument();
    fireEvent.click(modalWrapper);
    expect(mockOnClose).not.toHaveBeenCalled();
  });
});
