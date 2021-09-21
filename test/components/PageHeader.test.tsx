import { render, screen } from '@testing-library/react';
import * as React from 'react';
import { PageHeader } from '../../src/components/PageHeader';

describe('components/PageHeader', () => {
  it('renders correctly', () => {
    render(<PageHeader />);
  });

  it('renders a heading', () => {
    render(<PageHeader />);

    expect(screen.getByRole('heading')).toBeInTheDocument();
  });
});
