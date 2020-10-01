import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Email from './Email';

describe('<Email />', () => {
  it('renders component properly', () => {
    const { getByText } = render(<Email text='test' />);
    const textElement = getByText(/test/i);
    const deleteElement = getByText('x');

    expect(textElement).toBeInTheDocument();
    expect(deleteElement).toBeInTheDocument();
  });

  it('should call onDeleteClick when X is clicked', () => {
    const onDeleteClick = jest.fn();
    const { getByText } = render(<Email text='test' onDeleteClick={onDeleteClick} />);
    const deleteButton = getByText('x');

    fireEvent.click(deleteButton);

    expect(onDeleteClick).toHaveBeenCalled();
  });
});
