export const isUndefined = (x: any): boolean => typeof x === 'undefined'

export const isInt = (n: any): boolean => typeof n === 'number' && n % 1 === 0

export const isFloat = (n: any): boolean => typeof n === 'number' && n % 1 !== 0

export const isNull = (x: any): boolean => typeof x === 'object' && x === null

export const isPhone = (phone: string): boolean => phone.replace(/[\s()+\-A-Z_a-z]+/gm, '').length === 11
