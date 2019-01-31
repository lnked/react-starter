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

const componentPath = `${paths[essence]}/${folder}`

if (!name) {
  signale.fatal(`Need the name of the ${essence}`)
  signale.note(`Use the command 'yarn add-${essence} --name example-name'`)

  return false
}

if (!fs.existsSync(componentPath)) {
  const componentIndex = `${componentPath}/index.tsx`
  const componentTypes = `${componentPath}/types.ts`
  const componentStyles = `${componentPath}/styles.scss`
  const componentStyled = `${componentPath}/styled.ts`

  fs.mkdirSync(componentPath);
  fs.writeFileSync(componentIndex, getTemplate(type, componentName(name)));
  fs.writeFileSync(componentTypes, getTemplate(`types.${type}`));
  fs.writeFileSync(componentStyles, getTemplate('styles'));
  fs.writeFileSync(componentStyled, getTemplate('styled'));

  signale.success(`A ${essence} called ${componentName(name)} created successfully!`)
}
else {
  signale.debug(`The ${essence} named ${componentName(name)} already exists!`)
}
