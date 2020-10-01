import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Input from './Input';

describe('<Input />', () => {
  it('renders component properly', async() => {
    const onChange = jest.fn();
    const { getByDisplayValue, getByRole } = render(<Input onChange={onChange} />);

    const input = getByRole('textbox');
    fireEvent.change(input, { target: { value: 'test' } });

    expect(onChange).toHaveBeenCalled();
    expect(getByDisplayValue('test')).toBeInTheDocument();
  });
});
