import React from 'react';
import { render } from '@testing-library/react';
import EmailEditor from './EmailEditor';

describe('<EmailEditor />', () => {
  it('renders component properly', () => {
    const { getByText } = render(<EmailEditor />);
    const element = getByText(/Share/i);

    expect(element).toBeInTheDocument();
  });
});
