export const compare = (a1: any[], a2: any[]): boolean =>
    !!(a1 && a2 && a1.length === a2.length && a1.every((v, i) => v === a2[i]))

export const shallowCompare = (prev: any, next: any, uniq: string | number): boolean => {
    const prevKeys = prev.map((item: any) => item[uniq])
    const diffData = next.filter((item: any) => prevKeys.indexOf(item[uniq]) < 0)

    return diffData && diffData.length === 0
}
