export interface S {
    styler: (css: any) => string;
    bind: (css: any) => any;
}

const Classes: S = {
  styler: (css, ...args: any[]): string => {
    const r: string[] = []

    if (args.length) {
      Object.keys(args).map(id => {
        const item = args[id] || ''

        const type = typeof item

        if (['string', 'number'].indexOf(type) >= 0) {
          r.push(item)
        } else {
          Object.keys(item).map(name => {
            if (typeof item[name] !== 'undefined' && item[name]) {
              r.push(item.length ? css[item[name]] : css[name])
            }
          })
        }
      })
    }

    return r.filter(i => i !== '').join(' ')
  },

  bind: css => {
    return Classes.styler.bind(Classes, css)
  },
}

export default Classes
