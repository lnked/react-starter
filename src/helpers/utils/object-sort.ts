export const objectSort = (v: string): any =>
  (a: any, b: any) => a && b && a[v] - b[v]
