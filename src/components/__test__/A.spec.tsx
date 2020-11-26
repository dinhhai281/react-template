import { A } from '@components/A';
import { render } from '@testing-library/react';
import React from 'react';

describe('A Component', () => {
  test('should match snapshot', () => {
    const { container } = render(<A />);
    expect(container).toMatchSnapshot();
  });
});
