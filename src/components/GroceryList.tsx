import { Button, List, ListItem } from '@mui/material';
import * as React from 'react';
import { Grocery } from '../types';

export interface GroceryListProps {
  items: Grocery[];
  onSelectGrocery: (name: Grocery['name']) => void;
}

export const GroceryList = ({ items, onSelectGrocery }: GroceryListProps) => {
  const { length } = items;

  return (
    <List>
      {items.map(({ name }, index) => {
        const isLastItem = index === length - 1;

        return (
          <ListItem
            key={name}
            divider={!isLastItem}
            secondaryAction={
              <Button
                type="button"
                size="small"
                variant="contained"
                onClick={() => onSelectGrocery(name)}
              >
                View Details
              </Button>
            }
          >
            {name}
          </ListItem>
        );
      })}
    </List>
  );
};
