import * as React from 'react'
import * as css from './styles.scss'

interface T {
    name: string;
    size?: string;
    theme?: string;
    label?: string;
    checked?: boolean;
    className?: string;
    value?: string | number;
    children?: React.ReactChild;
    handleChange?: (checked: string, status: boolean) => void | boolean;
}

interface S {
    checked: boolean;
}

export default class Checkbox extends React.PureComponent<T, S> {
    static defaultProps = {
        size: 'normal',
        theme: '',
        label: '',
        value: '',
        className: '',
        checked: false,
        handleChange: false
    }

    state = {
        // checked: this.props.checked || false
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

    handleChange = (e) => {
        const checked = e.nativeEvent.target.value

        this.setState({ checked: !this.state.checked }, () => {
            if (this.props.handleChange) {
                this.props.handleChange(checked, this.state.checked)
            }
        })
    }

    getInputProps = (id: string) => {
        const { checked } = this.state

        const { name, value } = this.props

        const props: any = {
            id,
            type: 'checkbox',
            name,
            value,
            checked,
            className: css.input,
            onChange: this.handleChange
        }

        return props
    }

    renderStatus = () => {
        const cn: Array<string> = []

        const { theme } = this.props
        const { checked } = this.state

        cn.push(css.status)

        if (theme) {
            cn.push(css[`status_${theme}`])
        }

        return <span className={cn.join(' ')} aria-checked={checked} />
    }

    renderLabel = () => {
        if (this.props.label || this.props.children) {
            return (
                <span className={css.label}>
                    {this.props.label || this.props.children}
                </span>
            )
        }

        return ''
    }

    render () {
        const cn: Array<string> = []

        const { name, size, className } = this.props

        const id = `checkbox_${name}`

        cn.push(css.checkbox)

        if (className) {
            cn.push(className)
        }

        if (size) {
            cn.push(css[`checkbox_${size}`])
        }

        const props = this.getInputProps(id)

        return (
            <label htmlFor={id} className={cn.join(' ')}>
                <input {...props} />
                { this.renderStatus() }
                { this.renderLabel() }
            </label>
        )
    }
}
