import * as React from 'react'
import * as css from './styles.scss'

interface T {
    step?: number;
    minValue?: number;
    maxValue?: number;
}

interface S {
    value: number;
}

export default class Range extends React.PureComponent<T, S> {
    static defaultProps = {
        step: 1,
        minValue: 0,
        maxValue: 100
    }

    state = {
        value: 0
    }

    handleChange = (e) => {
        const value = parseInt(e.target.value, 10)

        this.setState({ value })
    }

    render () {
        const { step, minValue, maxValue } = this.props
        const { value } = this.state

        return (
            <div className={css.range}>
                <input
                    type="range"
                    step={step}
                    min={minValue}
                    max={maxValue}
                    value={value}
                    className={css.input}
                    onChange={this.handleChange}
                />
            </div>
        )
    }
}
