export const replaceMask = (str: string, key: string | number, data: any): string =>
  str && data && str.replace(new RegExp(`{${key}}`, 'g'), data)
