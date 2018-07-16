export const createMarkup = (data) => {
    return {__html: data}
}

export const ucfirst = (str) => {
    const f = str.charAt(0).toUpperCase()
    return f + str.substr(1, str.length - 1)
}

export const formatMoney = (num, penny) => {
    if (typeof penny === 'undefined') {
        penny = false
    }

    const formatter = new Intl.NumberFormat('ru')

    return formatter.format(num)
}

export const formatDeclOfNum = (n, titles) => {
    const cases = [2, 0, 1, 1, 1, 2]
    n = Math.abs(n)
    return titles[(n % 100 > 4 && n % 100 < 20) ? 2 : cases[(n % 10 < 5) ? n % 10 : 5]]
}

export const declOfNum = (n, titles) => {
    return [n, formatDeclOfNum(n, titles)].join(' ')
}

export const trim = (str) => str.replace(/^\s+|\s+$/g, '')

export const kebabCase = string => string.replace(/([a-z])([A-Z])/g, '$1-$2').replace(/\s+/g, '-').toLowerCase()
