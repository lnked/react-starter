import * as React from 'react'
import * as css from './styles.scss'

import { Classes } from 'helpers'

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  name?: string;
  type?: 'button' | 'checkbox' | 'file' | 'hidden' | 'password' | 'radio' | 'text';
  label?: string;
  value?: string | number;
  integer?: boolean;
  floating?: boolean;
  placeholder?: string;
  handleChange?: (e: Event) => void | boolean;
}

export interface S {
  value?: string | number;
}

const cx = Classes.bind(css)

export default class Input extends React.Component<InputProps, S> {

  static defaultProps = {
    type: 'text',
    label: '',
    value: '',
    integer: false,
    floating: false,
  }

  input: any = React.createRef()

  state = {
    value: '',
  }

  // static getDerivedStateFromProps(props: Props, state: S) {
  //     if (state.value !== props.value) {
  //         return {
  //             value: props.value,
  //             touch: false
  //         }
  //     }

  //     return {
  //         touch: false
  //     }
  // }

  componentDidMount () {
    if (this.input && this.input.current) {
      this.input.current.value = 'xxx'
    }
  }

  prepared = (value: string) => {
    const { integer, floating } = this.props

    if (integer) {
      return parseInt(value, 10)
    } else if (floating) {
      return parseFloat(value)
    }

    return value
  }

  handleChange = (e: any) => {
    const value = this.prepared(e.target.value)

    this.setState((state: S) => ({
      ...state, value,
    }), () => {
      if (this.props.handleChange) {
        this.props.handleChange(value)
      }
    })
  }

  render () {
    const { value } = this.state
    const { label } = this.props

    return (
      <label className={cx({ wrapper: true })}>
        {label &&
          <div className={cx(css.label)}>{label}</div>
        }

        <input
          ref={this.input}
          value={value}
          onChange={this.handleChange}
          className={cx(css.control, css.controlInput)}
        />
      </label>
    )
  }

}
