export const ucFirst = (str: string) => {

    const f = str && str.charAt(0).toUpperCase()
    return f && `${f}${str.substr(1)}`

}

export const normalize = (str: string) => {

    return (str && ucFirst(str.replace(/-/g, ' '))) || str

}
