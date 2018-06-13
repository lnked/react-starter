export const isActive = (match, location) => {
    if (!match) {
        return false
    }
    return location.pathname === match.path
}

export const isUndefined = (x) => {
    return typeof (x) === 'undefined'
}

export const isNull = (x) => {
    return typeof x === 'object' && x === null
}

export const isInt = (n) => {
    return Number(n) === n && n % 1 === 0
}

export const isFloat = (n) => {
    return Number(n) === n && n % 1 !== 0
}
