export interface S {
    bind: (css: any, args: Array<any>) => string;
    styler: (css: any) => void;
}

export const classes: S = {
    styler: (css, ...args: Array<any>): string => {
        const r: Array<string> = []

        if (args.length) {
            Object.keys(args).map(id => {
                const item = args[id] || ''

                const type = typeof item

                if (['string', 'number'].indexOf(type) >= 0) {
                    r.push(item)
                } else {
                    Object.keys(item).map(name => {
                        if (typeof item[name] !== 'undefined' && item[name]) {
                            r.push(css[name])
                        }
                    })
                }
            })
        }

        return r.filter(i => i !== '').join(' ')
    },

    bind: (css) => {
        return classes.styler.bind(classes, css)
    },
}
