module.exports.getTemplate = (type = 'class', name) => {
  const template = []

  if (type === 'function') {
    template.push(
      `import * as React from 'react'\n`,
      `import * as css from './styles.scss'`,
      `import { classes } from 'helpers'`,
      `import { P } from './types'`,
      `import { StyledDiv } from './styled'\n`,
      `const cx = classes.bind(css)\n`,
      `export function ${name} ({ className = '' }: P) {`,
      `\treturn <StyledDiv className={cx({ test: true }, className)} />`,
      `}\n`,
      `export default ${name}\n`,
    )
  }

  if (type === 'class') {
    template.push(
      `import * as React from 'react'\n`,
      `import * as css from './styles.scss'`,
      `import { classes } from 'helpers'`,
      `import { P, S } from './types'`,
      `import { StyledDiv, StyledButton } from './styled'\n`,
      `const cx = classes.bind(css)\n`,
      `export class ${name} extends React.Component<P, S> {\n`,

      `\tstatic defaultProps = {`,
      `\t\tvalue: '',`,
      `\t\tinteger: false,`,
      `\t}\n`,

      `\tref: any = React.createRef()\n`,

      `\tstate = {`,
      `\t\tvalue: '',`,
      `\t}\n`,

      `\tstatic getDerivedStateFromProps (props: P, state: S) {`,
      `\t\tif (state.value !== props.value) {`,
      `\t\t\treturn {`,
      `\t\t\t\t...state,`,
      `\t\t\t\t...props,`,
      `\t\t\t}`,
      `\t\t}`,

      `\t\treturn null`,
      `\t}\n`,

      `\tshouldComponentUpdate (props: P) {`,
      `\t\tconst { value } = this.props`,
      `\t\treturn !(value === props.value)`,
      `\t}\n`,

      `\tcomponentDidMount () {`,
      `\t\tconsole.log('componentDidMount')`,
      `\t}\n`,

      `\tcomponentDidUpdate (props: P, state: S) {`,
      `\t\tconsole.log('du', props, state)`,
      `\t}\n`,

      `\tcomponentWillUnmount () {}\n`,

      `\thandleClick = (e: any) => {`,
      `\t\tthis.setState((state: S) => ({ ...state, value: e.target.value }))\n`,
      `\t\tif (this.props.handleClick) {`,
      `\t\t\tthis.props.handleClick(e)`,
      `\t\t}`,
      `\t}\n`,

      `\trender () {`,
      `\t\tconst { className } = this.props\n`,
      `\t\treturn (`,
      `\t\t\t<StyledDiv className={cx({ test: true }, className)}>`,
      `\t\t\t\t<StyledButton onClick={this.handleClick} />`,
      `\t\t\t</StyledDiv>`,
      `\t\t)`,
      `\t}\n`,
      `}\n`,
      `export default ${name}\n`,
    )
  }

  if (['types.class', 'types.function'].indexOf(type) >= 0) {
    template.push(
      `export interface P {`,
      `\timg: any;`,
      `\tvalue: string;`,
      `\tenum?: 'button' | 'text';`,
      `\twidth?: number;`,
      `\tsimple?: boolean;`,
      `\thandleChange?: (e: Event) => void | boolean;`,
      `\tchildren?: JSX.Element[] | JSX.Element | any;`,
      `}\n`,
    )
  }

  if (type === 'types.class') {
    template.push(
      `export interface S {`,
      `\tvalue?: string | number;`,
      `}\n`,
    )
  }

  if (type === 'styled') {
    template.push(
      `import styled, { css } from 'styled-components'`,
      `import CommonStyles from 'theme/common-styles'\n`,
      `export const StyledDiv = styled.div\``,
      `\t\${CommonStyles.themeColor};`,
      `\tbackground: transparent;`,
      `\tborder-radius: 3px;`,
      `\tborder: 2px solid palevioletred;`,
      `\tcolor: palevioletred;`,
      `\toutline: 0;`,
      `\tcursor: pointer;`,
      `\tmargin: 0.5em 1em;`,
      `\tpadding: 0.25em 1em;\n`,
      `\t&:hover {`,
      `\t\tborder-color: #f00;`,
      `\t\tbackground-color: #f00;`,
      `\t}\n`,
      `\t\${(props: any) => props.primary && css\``,
      `\t\tbackground: palevioletred;`,
      `\t\tcolor: white;`,
      `\t\`}`,
      `\`\n`,

      `export const StyledButton = styled.button\`\`\n`,
    )
  }

  return template.join('\n').replace(/\t/g, '  ')
}

module.exports.folderName = (str) => {
  return str.replace(/\s+/g, '-').toLowerCase();
}

module.exports.componentName = (str) => {
  return str.replace(/(\b\w)/gi, (m) => m.toUpperCase()).replace(/\s+/g, '').replace(/-/g, '');
}

