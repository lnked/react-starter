export const hasClass = (element: any, classList: string[]) => {
    let includes = false
    const { className } = element

    classList.map(cn => {
        if (!includes) {
            includes = cn.indexOf(className) > -1
        }
    })

    return includes
}
