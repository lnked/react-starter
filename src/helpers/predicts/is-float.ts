export const isFloat = (n: any): boolean =>
  n && typeof n === 'number' && n % 1 !== 0
