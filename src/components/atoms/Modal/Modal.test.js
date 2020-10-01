import React from 'react';
import { render } from '@testing-library/react';
import Modal from './Modal';

describe('<Modal />', () => {
  it('renders component properly', () => {
    const { getByText } = render(<Modal topContent='test 1' bottomContent='test 2' />);
    const topElement = getByText('test 1');
    const bottomElement = getByText('test 2');

    expect(topElement).toBeInTheDocument();
    expect(bottomElement).toBeInTheDocument();
  });
});
