import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Button from './Button';

describe('<Button />', () => {
  it('renders component properly', () => {
    const { getByText } = render(<Button text='test' />);
    const textElement = getByText(/test/i);

    expect(textElement).toBeInTheDocument();
  });

  it('should call onClick when the button is clicked', () => {
    const onClick = jest.fn();
    const { getByText } = render(<Button text='test' onClick={onClick} />);
    const button = getByText('test');

    fireEvent.click(button);

    expect(onClick).toHaveBeenCalled();
  });
});
