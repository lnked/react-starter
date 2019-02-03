const fs = require('fs')
const signale = require('signale')

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
const type = options.type || 'class'

const folder = folderName(name)

const pathIndex = `${paths[essence]}/index.ts`
const componentPath = `${paths[essence]}/${folder}`

if (!name) {
  signale.fatal(`Need the name of the ${essence}`)
  signale.note(`Use the command 'yarn add-${essence} --name example-name'`)

  return false
}

const exportName = componentName(name)

if (!fs.existsSync(componentPath)) {
  const componentIndex = `${componentPath}/index.tsx`
  const componentTypes = `${componentPath}/types.ts`
  const componentStyles = `${componentPath}/styles.scss`
  const componentStyled = `${componentPath}/styled.ts`
  const componentRoute = `${componentPath}/route.ts`

  fs.mkdirSync(componentPath);
  fs.writeFileSync(componentIndex, getTemplate(type, exportName));
  fs.writeFileSync(componentTypes, getTemplate(`types.${type}`));
  fs.writeFileSync(componentStyles, getTemplate('styles'));
  fs.writeFileSync(componentStyled, getTemplate('styled'));

  if (essence === 'page') {
    const indexContents = fs.readFileSync(pathIndex, 'utf8')

    fs.writeFileSync(componentRoute, getTemplate('route'));
    fs.writeFileSync(pathIndex, `export { routes as ${exportName}Route } from './${folder}/route'\n${indexContents}`)
  } else {
    // Append export
    fs.appendFileSync(pathIndex, `export { ${exportName} } from './${folder}'\n`)
  }

  signale.success(`A ${essence} called ${exportName} created successfully!`)
  signale.note(`import { ${exportName} } from '${essence}s'`)
}
else {
  signale.debug(`The ${essence} named ${exportName} already exists!`)
}
