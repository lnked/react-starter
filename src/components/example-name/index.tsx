import * as React from 'react'

import * as css from './styles.scss'
import { classes } from 'helpers'
import { P, S } from './types'
import { StyledDiv, StyledButton } from './styled'

const cx = classes.bind(css)

export default class ExampleName extends React.Component<P, S> {

  static defaultProps = {
    value: '',
    integer: false,
  }

  ref: any = React.createRef()

  state = {
    value: '',
  }

  static getDerivedStateFromProps (props: P, state: S) {
    if (state.value !== props.value) {
      return {
        ...state,
        ...props,
      }
    }
    return null
  }

  shouldComponentUpdate (props: P) {
    const { value } = this.props
    return !(value === props.value)
  }

  componentDidMount () {
    console.log('componentDidMount')
  }

  componentDidUpdate (props: P, state: S) {
    console.log('du', props, state)
  }

  componentWillUnmount () {}

  handleClick = (e: any) => {
    this.setState((state: S) => ({ ...state, value: e.target.value }))

    if (this.props.handleClick) {
      this.props.handleClick(e)
    }
  }

  render () {
    const { className } = this.props

    return (
      <StyledDiv className={cx({ test: true }, className)}>
        <StyledButton onClick={this.handleClick} />
      </StyledDiv>
    )
  }

}

export { ExampleName }
