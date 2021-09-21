import { render } from '@testing-library/react';
import * as React from 'react';
import { Loader } from '../../src/components/Loader';

describe('components/Loader', () => {
  it('renders correctly', () => {
    render(<Loader />);
  });
});
