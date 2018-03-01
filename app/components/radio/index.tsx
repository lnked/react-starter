import * as React from 'react'
import * as css from './styles'

interface T {
    name: string;
    label?: string;
    checked?: boolean;
    children?: string;
    className?: string;
    value: string | number;
    handleChange: (value: number | string | boolean) => void | boolean;
}

interface S {
    checked: boolean;
}

export default class Radio extends React.PureComponent<T, S> {
    static defaultProps = {
        label: '',
        checked: false,
        handleChange: (value) => {
            console.log('check radio: = ', value)
        }
    }

    state = {
        checked: false || this.props.checked
    }

    handleChange = (e) => {
        const checked = e.nativeEvent.target.value

        this.setState({ checked: !this.state.checked }, () => {
            if (this.props.handleChange) {
                this.props.handleChange(checked)
            }
        })
    }

    render () {
        const { checked } = this.state
        const { name, value, label, children } = this.props

        const id = `radio_${name}_${value}`

        return (
            <label htmlFor={id} className={css.radio}>
                <input
                    id={id}
                    type="radio"
                    name={name}
                    value={value}
                    checked={checked}
                    className={css.input}
                    onChange={this.handleChange}
                />

                <span className={css.label}>{label || children}</span>
            </label>
        )
    }
}
