import * as React from 'react'
import * as css from './styles.scss'

import { classes } from 'helpers'

export interface Props {
    name?: string;
    type?: 'button' | 'checkbox' | 'file' | 'hidden' | 'password' | 'radio' | 'text';
    label?: string;
    value?: string | number;
    focus?: boolean;
    integer?: boolean;
    floating?: boolean;
    clearable?: boolean;
    placeholder?: string;
    className: string;
    wrapperClassName: string;
    handleBlur?: (value: string) => void | boolean;
    handleFocus?: (e: Event) => void | boolean;
    handleChange?: (e: Event) => void | boolean;
    handleKeyPress?: (keyCode: number) => void | boolean;
}

export interface State {
    value?: string | number;
}

const cx = classes.bind(css)

export class SimpleInput extends React.Component<Props, State> {
    static defaultProps = {
        type: 'text',
        label: '',
        value: '',
        focus: false,
        integer: false,
        floating: false,
        clearable: false,
    }

    static getDerivedStateFromProps(props: Props, state: State) {
        if (state.value !== props.value) {
            return {
                value: props.value,
                touch: false
            }
        }

        return {
            touch: false
        }
    }

    state = {
        value: '',
    }

    input: any = React.createRef()

    componentDidMount () {
        if (this.props.focus) {
            this.input.current.focus()
        }
    }

    prepared = (value: string) => {
        const { integer, floating } = this.props

        if (integer) {
            return parseInt(value, 10)
        } else if (floating) {
            return parseFloat(value)
        }

        return value
    }

    handleClear = () => {
        this.setState((state: State) => {
            return {
                ...state, value: '',
            }
        }, () => {
            if (this.props.handleChange) {
                this.props.handleChange('')
            }
        })
    }

    handleChange = (e: any) => {
        const value = this.prepared(e.target.value)

        this.setState((state: State) => {
            return {
                ...state,
                value,
            }
        }, () => {
            if (this.props.handleChange) {
                this.props.handleChange(value)
            }
        })
    }

    handleFocus = (e: any) => {
        if (this.props.handleFocus) {
            this.props.handleFocus(e)
        }
    }

    handleBlur = (e: any) => {
        const value = this.prepared(e.target.value)

        if (this.props.handleBlur) {
            this.props.handleBlur(value)
        }
    }

    handleKeyPress = (e: any) => {
        const keyCode = e.keyCode || e.charCode || e.which

        if (this.props.handleKeyPress) {
            this.props.handleKeyPress(keyCode)
        }
    }

    render() {
        const { value } = this.state
        const { label, clearable, placeholder, wrapperClassName, className } = this.props

        return (
            <label className={cx({ wrapper: true }, wrapperClassName)}>
                {label &&
                    <div className={cx(css.label)}>{label}</div>
                }

                <input
                    ref={this.input}
                    value={value}
                    onBlur={this.handleBlur}
                    onFocus={this.handleFocus}
                    onChange={this.handleChange}
                    onKeyPress={this.handleKeyPress}
                    placeholder={placeholder}
                    className={cx(css.control, css.controlInput, className)}
                />

                {value && clearable &&
                    <button type="button" onClick={this.handleClear} className={css.cleaner} />
                }
            </label>
        )
    }
}
