import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Label from './Label';

describe('<Label />', () => {
  it('renders component properly', () => {
    const { getByText } = render(<Label text='test' />);
    const textElement = getByText(/test/i);
    const deleteElement = getByText('x');

    expect(textElement).toBeInTheDocument();
    expect(deleteElement).toBeInTheDocument();
  });

  it('should call onDeleteClick when X is clicked', () => {
    const onDeleteClick = jest.fn();
    const { getByText } = render(<Label text='test' onDeleteClick={onDeleteClick} />);
    const deleteButton = getByText('x');

    fireEvent.click(deleteButton);

    expect(onDeleteClick).toHaveBeenCalled();
  });
});
