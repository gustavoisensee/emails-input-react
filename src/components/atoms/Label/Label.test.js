import React from 'react';
import { render } from '@testing-library/react';
import Label from './Label';

test('renders component properly', () => {
  const { getByText } = render(<Label text='test' />);
  const text = getByText(/test/i);

  expect(text).toBeInTheDocument();
});
