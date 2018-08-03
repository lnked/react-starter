import * as React from 'react'
import * as css from './styles.scss'

interface P {
    name: string;
    label?: string;
    checked?: boolean;
    className?: string;
    value?: string | number;
    children?: JSX.Element[] | JSX.Element | string;
    handleChange?: (value: number | string | boolean) => void | boolean;
}

interface S {
    checked: any;
}

export class Radio extends React.PureComponent<P, S> {
    static defaultProps = {
        label: '',
        value: '',
        checked: false,
        className: '',
        handleChange: (value) => {
            console.log('check radio: = ', value)
        }
    }

    state = {
        checked: false
    }

    static getDerivedStateFromProps (nextProps, prevState) {
        if (prevState.checked !== nextProps.checked) {
            return {
                checked: nextProps.checked
            }
        }

        return null
    }

    handleChange = (e: any) => {
        const checked = e.target.value

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

        const props: any = {
            id,
            type: 'radio',
            name,
            value,
            checked,
            className: css.input,
            onChange: this.handleChange
        }

        return (
            <label htmlFor={id} className={css.radio}>
                <input {...props} />

                <span className={css.label}>{label || children}</span>
            </label>
        )
    }
}
