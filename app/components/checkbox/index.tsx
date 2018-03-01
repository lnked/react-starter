import * as React from 'react'
import * as css from './styles'

interface T {
    name: string;
    size?: string;
    theme?: string;
    label?: string;
    checked?: boolean;
    children?: string;
    className?: string;
    value: string | number;
    handleChange: (checked: string, status: boolean) => void | boolean;
}

interface S {
    checked: boolean;
}

export default class Checkbox extends React.PureComponent<T, S> {
    static defaultProps = {
        size: 'normal',
        theme: '',
        label: '',
        className: '',
        checked: false,
        handleChange: false
    }

    state = {
        checked: false || this.props.checked
    }

    componentWillReceiveProps (nextProps) {
        if (this.props.checked !== nextProps.checked) {
            this.setState({
                checked: nextProps.checked
            })
        }
    }

    handleChange = (e) => {
        const checked = e.nativeEvent.target.value

        this.setState({ checked: !this.state.checked }, () => {
            if (this.props.handleChange) {
                this.props.handleChange(checked, this.state.checked)
            }
        })
    }

    renderStatus () {
        const cn: any = []

        const { theme } = this.props
        const { checked } = this.state

        cn.push(css.status)

        if (theme) {
            cn.push(css[`status_${theme}`])
        }

        return <span className={cn.join(' ')} aria-checked={checked} />
    }

    renderLabel () {
        if (this.props.label || this.props.children) {
            return (
                <span className={css.label}>
                    {this.props.label || this.props.children}
                </span>
            )
        }
    }

    render () {
        const cn: any = []

        const { checked } = this.state
        const { className, name, size, value } = this.props

        const id = `checkbox_${name}`

        cn.push(css.checkbox)

        if (className) {
            cn.push(className)
        }

        if (size) {
            cn.push(css[`checkbox_${size}`])
        }

        return (
            <label htmlFor={id} className={cn.join(' ')}>
                <input
                    id={id}
                    type="checkbox"
                    name={name}
                    value={value}
                    checked={checked}
                    className={css.input}
                    onChange={this.handleChange}
                />

                { this.renderStatus() }
                { this.renderLabel() }
            </label>
        )
    }
}
