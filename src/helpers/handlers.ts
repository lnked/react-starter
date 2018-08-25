export const createMarkup = (data: any) => {
    return { __html: data }
}

export const getDisplayName = (Component: any) => {
    return Component.displayName || Component.name || 'Component'
}

export const concat = (...rest: string[]) => {
    return rest.concat(' ')
}

export const ucfirst = (str: string) => {
    const f = str.charAt(0).toUpperCase()
    return f + str.substr(1, str.length - 1)
}

export const formatMoney = (num: number, penny: number = 0) => {
    const formatter = new Intl.NumberFormat('ru')
    console.log(penny)
    return formatter.format(num)
}

export const formatDeclOfNum = (n: number, titles: string[]) => {
    const cases = [2, 0, 1, 1, 1, 2]
    n = Math.abs(n)
    return titles[n % 100 > 4 && n % 100 < 20 ? 2 : cases[n % 10 < 5 ? n % 10 : 5]]
}

export const declOfNum = (n: number, titles: string[]) => {
    return [n, formatDeclOfNum(n, titles)].join(' ')
}

export const trim = (str: string) => str.replace(/^\s+|\s+$/g, '')

export const kebabCase = (str: string) =>
    str
        .replace(/([a-z])([A-Z])/g, '$1-$2')
        .replace(/\s+/g, '-')
        .toLowerCase()
