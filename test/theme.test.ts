import theme from '../src/theme';

describe('theme', () => {
  it('should have a palette', () => {
    expect(typeof theme.palette).toBe('object');
  });

  it('should have a typography object', () => {
    expect(typeof theme.typography).toBe('object');
  });
});
