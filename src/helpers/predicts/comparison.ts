
export const compare = (a1: any[], a2: any[]): boolean =>
    a1 && a2 && a1.length === a2.length && a1.every((v, i) => v === a2[i])
