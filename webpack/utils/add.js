const fs = require('fs')
const define = require("../define");
const { resolve } = require('path')
const { folderName, componentName, getTemplate } = require('./helpers')
const { parseArguments } = require('../functions')

const paths = {
  page: resolve(define.rs_source, 'pages'),
  layout: resolve(define.rs_source, 'layouts'),
  fragment: resolve(define.rs_source, 'fragments'),
  component: resolve(define.rs_source, 'components'),
}

const options = parseArguments(process.argv)

const essence = options.essence || 'component'
const name = options.name || ''

const folder = folderName(name)

const componentPath = `${paths[essence]}/${folder}`

// if (!fs.existsSync(componentPath)) {
  const componentIndex = `${componentPath}/index.tsx`

  fs.mkdirSync(componentPath);
  fs.writeFileSync(componentIndex, getTemplate(componentName(name)));
// }

console.log('add: ', options, { essence, name, folder, componentPath, fs: paths[essence] })
