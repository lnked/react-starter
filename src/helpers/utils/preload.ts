export const preload = (stack: any[]): void => {
    if (stack && stack.length) {
        const cb = (data: any) => {
            const fn = stack.shift()

            if (typeof fn === 'function') {
                fn(cb, data)
            }
        }

        cb(null)
    }
}
