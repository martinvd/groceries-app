import { render, screen } from '@testing-library/react';
import * as React from 'react';
import { GroceryCard } from '../../src/components/GroceryCard';
import {
  GroceryWithAdditionalInformation,
  GroceryWithImages,
} from '../../src/types';

describe('components/GroceryCard', () => {
  it('renders grocery item elements', () => {
    const testItemWithAdditionalInformation: GroceryWithAdditionalInformation =
      {
        name: 'item-name',
        description: 'item-description',
        additionalInformation: 'item-additionalInformation',
      };

    const testItemWithImages: GroceryWithImages = {
      name: 'item-name',
      description: 'item-description',
      images: ['item-image-1', 'item-image-2'],
    };

    const { rerender } = render(
      <GroceryCard item={testItemWithAdditionalInformation} />
    );

    expect(screen.getByText(/item-name/)).toBeInTheDocument();
    expect(screen.getByText(/item-description/)).toBeInTheDocument();
    expect(screen.getByText(/item-additionalInformation/)).toBeInTheDocument();

    rerender(<GroceryCard item={testItemWithImages} />);

    expect(screen.getAllByRole('img')).toHaveLength(2);
  });
});
