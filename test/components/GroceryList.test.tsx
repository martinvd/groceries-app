import { render, screen, fireEvent } from '@testing-library/react';
import * as React from 'react';
import { GroceryList } from '../../src/components/GroceryList';
import { Grocery } from '../../src/types';

describe('components/GroceryList', () => {
  const testItems: Grocery[] = [
    {
      name: 'item-name-1',
      description: 'item-description-1',
      additionalInformation: 'item-additionalInformation-2',
    },
    {
      name: 'item-name-2',
      description: 'item-description-2',
      additionalInformation: 'item-additionalInformation-2',
    },
  ];

  it('renders groceries list items', () => {
    render(<GroceryList items={testItems} onSelectGrocery={() => {}} />);

    expect(screen.getByText(/item-name-1/)).toBeInTheDocument();
    expect(screen.getByText(/item-name-2/)).toBeInTheDocument();
  });

  it('handles onSelectGrocery', () => {
    const onSelectGrocery = jest.fn();

    render(<GroceryList items={testItems} onSelectGrocery={onSelectGrocery} />);

    fireEvent.click(screen.getAllByRole('button')[0]);

    expect(onSelectGrocery).toHaveBeenCalledTimes(1);
  });
});
