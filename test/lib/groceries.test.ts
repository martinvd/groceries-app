import { filterGroceriesByName } from '../../src/lib/groceries';
import { Grocery } from '../../src/types';

describe('lib/groceries/filterGroceriesByName', () => {
  const apple = { name: 'Apple', description: '', additionalInformation: '' };
  const banana = {
    name: 'Banana',
    description: '',
    additionalInformation: '',
  };

  it('filters groceries by provided name', () => {
    const query = 'app';
    const groceries: Grocery[] = [apple, banana];
    const filtered: Grocery[] = [apple];

    expect(filterGroceriesByName(query, groceries)).toEqual(
      expect.arrayContaining(filtered)
    );
  });

  it('returns unfiltered list of query is empty', () => {
    const query = '';
    const groceries: Grocery[] = [apple, banana];
    const filtered: Grocery[] = [];

    expect(filterGroceriesByName(query, groceries)).toEqual(
      expect.arrayContaining(filtered)
    );
  });
});
