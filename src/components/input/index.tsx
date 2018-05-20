import * as React from 'react'
import * as css from './styles.scss'

import { Icon } from 'components'

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
    multiline?: number | boolean;
    handleChange?: ((value: string) => void);
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
        value: '',
        children: '',
        focus: false,
        cleaned: false,
        tabindex: false,
        maxlength: false,
        className: false,
        multiline: false,
        placeholder: 'Введите текст…',
        handleChange: (value) => {
            console.log(': = ', value)
        }
    }

    state = {
        value: this.props.value || this.props.children || ''
    }

    textControl: any = []

    prefix: string = Math.random().toString()

    componentDidMount () {
        // if (this.props.focus) {
        //     this.textControl.focus()
        // }
    }

    static getDerivedStateFromProps (nextProps, prevState) {
        if (prevState.value !== nextProps.value) {
            return {
                ...prevState,
                ...nextProps
            }
        }
        return null
    }

    handleChange = (e) => {
        const value = e.target.value

        this.setState({ value })

        if (this.props.handleChange) {
            this.props.handleChange(value)
        }
    }

    handleClear = () => {
        this.setState({ value: '' }, () => {
            this.textControl.focus()
        })
    }

    renderAdditional = () => {
        const addition: any = []

        const { hint, error } = this.props

        if (hint) {
            addition.push(
                <span className={css.hint} key={[this.prefix, 'hint'].join('.')}>
                    {hint}
                </span>
            )
        }

        if (error) {
            addition.push(
                <span className={css.error} key={[this.prefix, 'error'].join('.')}>
                    {error}
                </span>
            )
        }

        return addition
    }

    renderInput = () => {
        const cn: Array<string> = []
        const props: any = {}

        const { value } = this.state
        const { name, error, cleaned, multiline, maxlength, tabindex, className } = this.props

        const id = `input_${name}`

        cn.push(css.control)

        if (typeof(className) === 'string') {
            cn.push(className)
        }

        if (error) {
            cn.push(css.control_error)
        }

        if (multiline) {
            cn.push(css.control_textarea)
        } else {
            cn.push(css.control_input)
        }

        props.spellCheck = false
        props.autoCorrect = 'off'
        props.autoComplete = 'off'
        props.autoCapitalize = 'off'
        props.onChange = this.handleChange
        props.className = cn.join(' ')

        props.ref = (c) => { this.textControl = c }

        if (tabindex) {
            props.tabindex = tabindex
        }

        if (maxlength) {
            props.maxlength = maxlength
        }

        return (
            <label className={css.label} htmlFor={id}>
                {multiline
                    ? <textarea id={id} {...props} rows={multiline || 10}>{value}</textarea>
                    : <input id={id} {...props} value={value} />
                }

                {(value && cleaned)
                    ? <button type="button"
                        className={css.clear}
                        onClick={this.handleClear}
                        key={[this.prefix, 'clear'].join('.')}><Icon symbol="close" hidden={true} /></button>
                    : ''
                }
            </label>
        )
    }

    render () {
        return (
            <div className={css.wrapper}>
                { this.renderInput() }
                { this.renderAdditional() }
            </div>
        )
    }
}
