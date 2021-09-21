import { getErrorMessage } from '../../src/lib/error';

describe('lib/error/getErrorMessage', () => {
  it('attempts to resolves error message from an error-like type', () => {
    const testErrorMessage = 'error-message';

    expect(getErrorMessage(new Error(testErrorMessage))).toBe(testErrorMessage);
    expect(getErrorMessage(testErrorMessage)).toBe(testErrorMessage);
  });
});
