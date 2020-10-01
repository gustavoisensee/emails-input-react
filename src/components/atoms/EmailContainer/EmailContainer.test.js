import React from 'react';
import { render } from '@testing-library/react';
import EmailContainer from './EmailContainer';

describe('<EmailContainer />', () => {
  it('renders the children component passed', () => {
    const { getByText } = render(<EmailContainer><span>123</span></EmailContainer>);
    const child = getByText('123');

    expect(child).toBeInTheDocument();
  });
});
