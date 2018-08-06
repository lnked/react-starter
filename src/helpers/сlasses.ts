interface S {
    bind: (css: any, args: Array<any>) => string;
    styler: (css: any) => void;
}

export const сlasses: S = {
    styler: (css, ...args: Array<any>): string => {
        const r: Array<string> = []

        if (args.length) {
            Object.keys(args).map(id => {
                const item = args[id]

                if (typeof item === 'string') {
                    r.push(item)
                } else {
                    Object.keys(item).map(name => {
                        if (item[name]) {
                            r.push(css[name])
                        }
                    })
                }
            })
        }

        return r.join(' ')
    },

    bind: (css) => {
        return сlasses.styler.bind(сlasses, css)
    },
}
