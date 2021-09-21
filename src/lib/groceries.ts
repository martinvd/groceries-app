import { findInString } from '../../src/lib/string';
import { Grocery } from '../../src/types';

export function filterGroceriesByName(query: string, groceries: Grocery[]) {
  if (!query.trim()) {
    return groceries;
  }

  return groceries.filter((grocery) => findInString(query, grocery.name));
}
