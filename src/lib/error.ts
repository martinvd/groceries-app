export function getErrorMessage(error: Error | unknown) {
  if (error instanceof Error) {
    return error.message;
  } else {
    return typeof error === 'string' ? error : '';
  }
}
