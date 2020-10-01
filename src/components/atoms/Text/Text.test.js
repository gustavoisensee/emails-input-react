import React from 'react';
import { render } from '@testing-library/react';
import Text from './Text';

describe('<Text />', () => {
  it('renders component properly', () => {
    const { getByText } = render(<Text>test</Text>);
    const text = getByText('test');

    expect(text).toBeInTheDocument();
  });
});
