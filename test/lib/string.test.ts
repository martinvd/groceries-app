import { findInString } from '../../src/lib/string';

describe('lib/string/findInString', () => {
  it('is case insensitive', () => {
    expect(findInString('ap', 'Apple')).toBe(true);
  });

  it('is should match the whole query', () => {
    expect(findInString('es', 'Apple')).toBe(false);
    expect(findInString('A p', 'Apple')).toBe(false);
  });

  it('finds matching strings', () => {
    expect(findInString('Ap', 'Apple')).toBe(true);
    expect(findInString('e', 'Apple')).toBe(true);
    expect(findInString('Apple', 'Apple')).toBe(true);
  });

  it('trims whitespace', () => {
    expect(findInString(' Apple ', 'Apple')).toBe(true);
    expect(findInString(' l', 'Apple')).toBe(true);
  });
});
