export const makeQuery = (options: any): string => {

    const stack: string[] = []

    if (options && Object.keys(options).length) {

        Object.keys(options).map((name: string) => {

            if (name && options[name]) {

                stack.push(`${name}=${options[name]}`)

            }

        })

    }

    return (options && (stack.length && `?${stack.join('&')}`)) || ''

}
