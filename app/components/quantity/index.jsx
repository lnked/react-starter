import React, { Component } from 'react'
import { oneOfType, string, bool, func, number } from 'prop-types'
import css from './styles.scss'


export default class Quantity extends Component {
    static propTypes = {
      type: string,
      name: string.isRequired,
      item: oneOfType([
        string,
        number,
      ]).isRequired,
      min: number,
      max: number,
      step: number,
      count: number.isRequired,
      handleChange: oneOfType([
        func,
        bool,
      ]),
    }

    static defaultProps = {
      type: 'number',
      min: 1,
      max: 9999,
      step: 1,
      count: 1,
      handleChange: (count) => {
        console.log(': = ', count)
      },
    }

    state = {
      count: this.props.count,
    }

    componentWillReceiveProps(nextProps) {
      if (nextProps.count !== this.state.count) {
        this.setState({...this.state, count: nextProps.count})
      }
    }

    shouldComponentUpdate(nextProps) {
      return nextProps.count !== this.state.count
    }

    changeValue = (value) => {
      const {
        min,
        max,
      } = this.props

      if (value >= max) {
        value = max
      }

      if (value <= min) {
        value = min
      }

      this.setState({
        count: value,
      })

      this.props.handleChange(this.props.item, value)
    }

    changeCount = (input) => {
      const count = parseInt(this.state.count, 10)
      const { min, max, step } = this.props

      if ((input < 0 && count > min) || (input > 0 && count < max)) {
        this.changeValue(count + (input * step))
      }
    }

    handleChange = (e) => {
      const re = /^\d+$/

      if (re.test(e.nativeEvent.target.value)) {
        this.changeValue(e.nativeEvent.target.value)
      }
    }

    render() {
      const {
        min,
        max,
        type,
        name,
      } = this.props

      const {
        count,
      } = this.state

      return (
        <div className={css.quantity}>
          <button
            type="button"
            onClick={this.changeCount.bind(this, -1)}
            className={[css.control, css.decrease].join(' ')}
          >-
          </button>
          <input
            type={type}
            name={name}
            min={min}
            max={max}
            value={count}
            onChange={this.handleChange.bind(this)}
            autoComplete="off"
            className={css.count}
          />
          <button
            type="button"
            onClick={this.changeCount.bind(this, 1)}
            className={[css.control, css.increase].join(' ')}
          >+
          </button>
        </div>
      )
    }
}
