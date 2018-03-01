import * as React from 'react'
import * as css from './styles'

interface T {
    min: number;
    max: number;
    step: number;
    name: string;
    item: string | number;
    count: number;
    type?: string;
    handleChange?: (count: number) => void | boolean;
}

interface S {
    count: number;
}

export default class Quantity extends React.Component<T, S> {
    static defaultProps = {
        type: 'number',
        min: 1,
        max: 9999,
        step: 1,
        count: 1,
        handleChange: (count) => {
            console.log(': = ', count)
        }
    }

    state = {
        count: this.props.count
    }

    componentWillReceiveProps ({ nextProps }: any) {
        if (nextProps.count !== this.state.count) {
            this.setState({count: nextProps.count})
        }
    }

    // shouldComponentUpdate (nextProps) {
    //     console.log(nextProps.count, this.state.count)
    //     return nextProps.count !== this.state.count
    // }

    changeValue = (count) => {
        const {
            min,
            max
        } = this.props

        if (count > max || count < min) {
            count = max
        }

        this.setState({ count })

        // this.props.handleChange(this.props.item, count)
    }

    changeCount = (input) => () => {
        const { count } = this.state
        const { min, max, step } = this.props

        if ((input < 0 && count > min) || (input > 0 && count < max)) {
            this.changeValue(count + (input * step))
        }
    }

    handleChange = (e) => {
        const re = /^\d+$/

        if (re.test(e.nativeEvent.target.value)) {
            this.changeValue(parseInt(e.nativeEvent.target.value, 10))
        }
    }

    render () {
        const { count } = this.state
        const { min, max, name, type } = this.props

        return (
            <div className={css.quantity}>
                <button
                    type="button"
                    onClick={this.changeCount(-1)}
                    className={[css.control, css.decrease].join(' ')}
                >-
                </button>
                <input
                    type={type}
                    name={name}
                    min={min}
                    max={max}
                    value={count}
                    onChange={this.handleChange}
                    autoComplete="off"
                    className={css.count}
                />
                <button
                    type="button"
                    onClick={this.changeCount(1)}
                    className={[css.control, css.increase].join(' ')}
                >+
                </button>
            </div>
        )
    }
}
