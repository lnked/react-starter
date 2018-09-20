export const preload = (stack: any[], pending = false): void => {
    if (stack && stack.length) {
        let index = stack.length

        const cb = (data: any) => {
            const fn = stack.shift()

            if (typeof fn === 'function') {
                fn(cb, data)
            }

            if (index === 0 && pending) {
                console.log('with pending')
            }

            index--
        }

        cb(null)
    }
}
