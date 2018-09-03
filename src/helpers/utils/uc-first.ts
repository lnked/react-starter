export const ucFirst = (str: string) => {
    const f = str.charAt(0).toUpperCase()
    return f + str.substr(1, str.length - 1)
}
