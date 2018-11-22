import dateFormat from 'dateformat'

export const formatDate = (date: string | number, format = 'dd.mm.yyyy'): string =>
  date && dateFormat(date, format)
