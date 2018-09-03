export const formatDeclOfNum = (n: number, titles: string[]) => {
    const cases = [2, 0, 1, 1, 1, 2]
    n = Math.abs(n)
    return titles[n % 100 > 4 && n % 100 < 20 ? 2 : cases[n % 10 < 5 ? n % 10 : 5]]
}

export const declOfNum = (n: number, titles: string[]) => {
    return [n, formatDeclOfNum(n, titles)].join(' ')
}
