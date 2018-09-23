export const preload = (stack: any[], pending = false): void => {
    const cb = (data: any, index: number = 0) => {
        const fn = stack.shift()

        if (typeof fn === 'function') {
            fn(cb, data)
        }

        if (index === 0 && pending) {
            console.log('with pending')
        }

        index--
    }

    if (stack && stack.length) {
        cb(null, stack.length)
    }
}
