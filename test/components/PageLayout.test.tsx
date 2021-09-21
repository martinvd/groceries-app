import { screen, render } from '@testing-library/react';
import * as React from 'react';
import { PageLayout } from '../../src/components/PageLayout';

describe('components/PageLayout', () => {
  it('renders correctly', () => {
    render(<PageLayout />);
  });

  it('renders its children', () => {
    render(
      <PageLayout>
        <div data-testid="content" />
      </PageLayout>
    );

    expect(screen.getByTestId('content')).toBeInTheDocument();
  });
});
