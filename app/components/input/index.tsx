import * as React from 'react'
import * as css from './styles.scss'

interface T {
    name: string;
    value?: string | number;
    children?: string | number;
    type?: string;
    hint?: string;
    focus?: boolean;
    error?: string | boolean;
    cleaned?: boolean;
    className?: string | boolean;
    placeholder?: string;
    tabindex?: number | boolean;
    maxlength?: number | boolean;
    handleChange?: ((value: any) => void);
    status?: 'warn' | 'error' | 'valid' | 'normal';
    textControl?: React.ReactDOM
}

interface S {
    value: string | number;
}

export default class Input extends React.Component<T, S> {
    static defaultProps = {
        type: 'text',
        status: 'normal',
        value: 0,
        children: '',
        focus: false,
        cleaned: false,
        tabindex: false,
        maxlength: false,
        className: false,
        placeholder: 'Введите текст…',
        handleChange: (value) => {
            console.log(': = ', value)
        }
    }

    state = {
        value: this.props.value || this.props.children || 0
    }

    textControl: any = []

    componentDidMount () {
        if (this.props.focus) {
            this.textControl.focus()
        }
    }

    componentWillReceiveProps (nextProps) {
        if (nextProps.value !== this.state.value) {
            this.setState({...this.state, value: nextProps.value})
        }
    }

    handleChange = (e) => {
        const value = e.target.value

        this.setState({ value })

        // this.props.handleChange(value)
    }

    handleClear = () => {
        this.setState({ value: '' }, () => {
            this.textControl.focus()
        })
    }

    render () {
        const { value } = this.state
        const { hint, name, error, cleaned, maxlength, tabindex, className } = this.props

        const id = `input_${name}`

        const cn: any = []
        const props: any = {}
        const addition: any = []
        const clearButton: any = []

        const _prefix = Math.random().toString()

        cn.push(css.control)
        cn.push(css.control_input)

        if (className) {
            cn.push(className)
        }

        if (error) {
            cn.push(css.control_error)
        }

        props.value = value
        props.spellCheck = false
        props.autoCorrect = 'off'
        props.autoComplete = 'off'
        props.autoCapitalize = 'off'
        props.onChange = this.handleChange
        props.className = cn.join(' ')

        if (tabindex) {
            props.tabindex = tabindex
        }

        if (maxlength) {
            props.maxlength = maxlength
        }

        if (hint) {
            addition.push(
                <span className={css.hint} key={[_prefix, 'hint'].join('.')}>
                    {hint}
                </span>
            )
        }

        if (error) {
            addition.push(
                <span className={css.error} key={[_prefix, 'error'].join('.')}>
                    {error}
                </span>
            )
        }

        if (value && cleaned) {
            clearButton.push(
                <button
                    className={css.clear}
                    onClick={this.handleClear}
                    key={[_prefix, 'clear'].join('.')}
                />
            )
        }

        return (
            <div className={css.wrapper}>
                <label className={css.label} htmlFor={id}>
                    <input id={id} {...props} ref={(c) => { this.textControl = c }} />
                    { clearButton }
                </label>

                { addition }
            </div>
        )
    }
}
