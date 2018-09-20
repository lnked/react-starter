export const isNull = (x: any): boolean =>
    x && typeof x === 'object' && x === null
