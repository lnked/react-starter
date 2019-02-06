import * as React from 'react'
import * as css from './styles.scss'

import { classes } from 'helpers'

export interface Props {
  name: string;
  min: number;
  max: number;
  step: number;
  count?: number;
  type?: string;
  item?: string | number;
  handleChange?: (count: number) => void | boolean;
}

export interface State {
  count: number;
}

const cx = classes.bind(css)

export default class Quantity extends React.Component<Props, State> {

  static defaultProps = {
    type: 'number',
    min: 1,
    max: 9999,
    step: 1,
    count: 1,
    handleChange: false,
  }

  state = {
    count: 0,
  }

  static getDerivedStateFromProps (props: Props, state: State) {
    if (state.count !== props.count) {
      return {
        ...state,
        ...props,
      }
    }

    return null
  }

  // shouldComponentUpdate (nextProps) {
  //     console.log(nextProps.count, this.state.count)
  //     return nextProps.count !== this.state.count
  // }

  changeValue = (count: number) => {
    const { min, max } = this.props

    if (count > max || count < min) {
      count = max
    }

    this.setState({ count })

    // this.props.handleChange(this.props.item, count)
  }

  changeCount = (input: number) => () => {
    const { count } = this.state
    const { min, max, step } = this.props

    if ((input < 0 && count > min) || (input > 0 && count < max)) {
      this.changeValue(count + input * step)
    }
  }

  handleChange = (e: React.SyntheticEvent) => {
    const re = /^\d+$/

    if (e.target && re.test(e.target.value)) {
      this.changeValue(parseInt(e.target.value, 10))
    }
  }

  render () {
    const { count } = this.state
    const { min, max, name, type } = this.props

    const decreaseClass = [css.control, css.decrease].join(' ')
    const increaseClass = [css.control, css.increase].join(' ')

    return (
      <div className={cx(css.quantity)}>
        <button type="button" onClick={this.changeCount(-1)} className={decreaseClass}>
          -
        </button>
        <input
          type={type}
          name={name}
          min={min}
          max={max}
          value={count}
          autoComplete="off"
          className={css.count}
          onChange={this.handleChange}
        />
        <button type="button" onClick={this.changeCount(1)} className={increaseClass}>
          +
        </button>
      </div>
    )
  }

}

export { Quantity }
