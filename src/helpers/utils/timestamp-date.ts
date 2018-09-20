export const timestampDate = (date: string): number =>
    parseInt(date.replace(/\./g, ''), 10) / 1000
