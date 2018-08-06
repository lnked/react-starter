interface S {
    bind: (sheets: any, args: Array<any>) => string;
    styler: (sheets: any) => void;
}

export const сlasses: S = {
    styler: (sheets, ...args: Array<any>): string => {
        const css: Array<string> = []

        if (args.length) {
            Object.keys(args).map(id => {
                const item = args[id]

                if (typeof item === 'string') {
                    css.push(sheets[item] || item)
                } else {
                    Object.keys(item).map(name => {
                        if (item[name]) {
                            css.push(sheets[name] || name)
                        }
                    })
                }
            })
        }

        return css.join(' ')
    },

    bind: (sheets) => {
        return сlasses.styler.bind(сlasses, sheets)
    },
}
