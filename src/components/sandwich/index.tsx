import * as React from 'react'
import * as css from './styles.scss'

import { Classes } from 'helpers'

export interface P {
  isOpened?: boolean;
}

export interface S {
  isOpened: boolean;
}

const cx = Classes.bind(css)

export default class Sandwich extends React.PureComponent<P, S> {

  static defaultProps = {
    isOpened: false,
  }

  state = {
    isOpened: false,
  }

  static getDerivedStateFromProps (props: P, state: S) {
    if (state.isOpened !== props.isOpened) {
      return {
        isOpened: props.isOpened,
      }
    }

    return null
  }

  handleChange = () => {
    this.setState((state: S) => ({
      isOpened: !state.isOpened,
    }))
  }

  render () {
    const { isOpened } = this.state

    return (
      <button className={css.sandwich} onClick={this.handleChange}>
        <span className={cx(css.line, { lineOpen: isOpened })} />
      </button>
    )
  }

}
