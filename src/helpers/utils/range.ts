export const range = (start: number, end: number) =>
  [ ...Array(1 + end - start).keys() ].map(v => start + v)
