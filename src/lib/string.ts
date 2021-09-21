export function findInString(query: string, input: string) {
  return input.toLowerCase().includes(query.trim().toLowerCase());
}
