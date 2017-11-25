import React, { PureComponent } from 'react'
import { oneOf, oneOfType, string, bool, func, number } from 'prop-types'
import css from './styles.scss'

export default class Input extends PureComponent {
    static propTypes = {
        type: string,
        name: string.isRequired,
        focus: bool,
        value: oneOfType([
            string,
            number
        ]),
        children: oneOfType([
            string,
            number
        ]),
        error: oneOfType([
            string,
            bool
        ]),
        hint: string,
        cleaning: bool,
        multiline: bool,
        className: string,
        handleChange: func,
        placeholder: string,
        tabindex: oneOfType([
            number,
            bool
        ]),
        maxlength: oneOfType([
            number,
            bool
        ]),
        status: oneOf([
            'warn',
            'error',
            'valid',
            'normal'
        ])
    }

    static defaultProps = {
        type: 'text',
        focus: false,
        className: '',
        cleaning: true,
        maxlength: false,
        tabindex: false,
        multiline: false,
        status: 'normal',
        placeholder: 'Введите текст…',
        handleChange: (value) => { console.log(': = ', value) }
    }

    constructor (props) {
        super(props)

        this.state = {
            value: this.props.value || this.props.children
        }

        this.keyPrefix = Math.random().toString()
        this.handleChange = this.handleChange.bind(this)
    }

    componentDidMount () {
        if (this.props.focus) {
            this._control.focus()
        }
    }

    shouldComponentUpdate (nextProps) {
        return nextProps.value !== this.state.value
    }

    componentWillUpdate (nextProps) {
        if (nextProps.value !== this.state.value) {
            this.setState({...this.state, value: nextProps.value})
        }
    }

    handleChange (e) {
        const content = e.nativeEvent.target.value

        this.setState({
            value: content
        })

        this.props.handleChange(content)
    }

    handleClear () {
        this.setState({
            value: ''
        })

        this._control.value = ''
        this._control.focus()
    }

    render () {
        const options = {
            input: [
                'name', 'type', 'placeholder'
            ],
            textarea: [
                'name', 'placeholder'
            ]
        }

        let wrapper

        const cn = []
        const props = {}

        if (this.props.multiline) {
            wrapper = 'textarea'
        } else {
            wrapper = 'input'
        }

        options[wrapper].map((item) => {
            if (typeof this.props[item] !== 'undefined') {
                props[item] = this.props[item]
            }
        })

        props.value = this.state.value

        props.defaultValue = this.state.value

        cn.push(css.control)
        cn.push(this.props.className)
        cn.push(`${css[`control_${wrapper}`]}`)

        const addition = []
        const clearButton = []

        if (this.props.hint) {
            addition.push(
                <span className={css.hint}
                    key={[this.keyPrefix, 'hint'].join('.')}
                >{this.props.hint}</span>
            )
        }

        if (this.props.error) {
            cn.push(`${css.control_error}`)

            if (typeof this.props.error === 'string') {
                addition.push(
                    <span className={css.error} key={[this.keyPrefix, 'error'].join('.')}>
                        {this.props.error}
                    </span>
                )
            }
        }

        if (this.state.value && !this.props.multiline && this.props.cleaning) {
            clearButton.push(
                <span className={css.clear}
                    key={[this.keyPrefix, 'clear'].join('.')}
                    onClick={this.handleClear.bind(this)}
                />
            )
        }

        if (this.props.maxlength) {
            props.maxlength = this.props.maxlength
        }

        if (this.props.tabindex) {
            props.tabindex = this.props.tabindex
        }

        props.key = [this.keyPrefix, 'control'].join('.')
        props.ref = (c) => { this._control = c }
        props.onChange = this.handleChange.bind(this)
        props.className = cn.join(' ')

        props.autoComplete = 'off'
        props.autoCorrect = 'off'
        props.autoCapitalize = 'off'
        props.spellCheck = false

        let control

        if (this.props.multiline) {
            control = (<textarea {...props} />)
        } else {
            control = (<input {...props} />)
        }

        return (
            <div className={css.wrapper} key={[this.keyPrefix, 'wrapper'].join('.')}>
                <label key={[this.keyPrefix, 'label'].join('.')} className={css.label}>
                    { control }
                    { clearButton }
                </label>

                { addition }
            </div>
        )
    }
}
