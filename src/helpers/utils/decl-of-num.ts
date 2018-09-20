export const formatDeclOfNum = (n: string | number, titles: string[]): string | number => {
    const cases = [2, 0, 1, 1, 1, 2]
    const x = Math.abs(parseInt(n.toString(), 10))
    return x && titles && titles[x % 100 > 4 && x % 100 < 20 ? 2 : cases[x % 10 < 5 ? x % 10 : 5]]
}

export const declOfNum = (n: string | number, titles: string[]): string | number =>
    n && titles && titles.length && [n, formatDeclOfNum(n, titles)].join(' ')
