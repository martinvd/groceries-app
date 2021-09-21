import { render, screen } from '@testing-library/react';
import * as React from 'react';
import { H1 } from '../../src/components/H1';

describe('components/H1', () => {
  it('renders correctly as an h1 element', () => {
    render(<H1 />);

    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument();
  });

  it('renders its children', () => {
    render(
      <H1>
        <div data-testid="content" />
      </H1>
    );

    expect(screen.getByTestId('content')).toBeInTheDocument();
  });
});
