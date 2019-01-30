module.exports.getTemplate = (name, type = 'function') => {
  return [
    `import * as React from 'react'\n`,
    `import * as css from './styles.scss'\n`,
    `import { classes } from 'helpers'\n`,
    `import { P } from './types'\n`,
    `const cx = classes.bind(css)\n`,
    `export function ${name} ({ className = '' }: P) {`,
    `  return <div className={cx({ spinner: true }, className)} />`,
    `}\n`
  ].join('\n')
}

module.exports.folderName = (str) => {
  return str.replace(/\s+/g, '-').toLowerCase();
}

module.exports.componentName = (str) => {
  return str.replace(/(\b\w)/gi, (m) => m.toUpperCase()).replace(/\s+/g, '').replace(/-/g, '');
}

