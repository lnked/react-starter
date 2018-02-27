import * as React from 'react'
import * as PropTypes from 'prop-types'
import * as css from './styles'

export default class Input extends React.PureComponent<{}, {}> {
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
        status: 'normal',
        placeholder: 'Введите текст…',
        handleChange: (value) => {
            console.log(': = ', value)
        }
    }

    constructor (props) {
        super(props)

        this.keyPrefix = Math.random().toString()
    }

    state = {
        value: this.props.value || this.props.children
    }

    componentDidMount () {
        if (this.props.focus) {
            this._control.focus()
        }
    }

    componentWillReceiveProps (nextProps) {
        if (nextProps.value !== this.state.value) {
            this.setState({...this.state, value: nextProps.value})
        }
    }

    handleChange = (e) => {
        const content = e.nativeEvent.target.value

        this.setState({
            value: content
        })

        this.props.handleChange(content)
    }

    handleClear = () => {
        this.setState({
            value: ''
        })

        this._control.value = ''
        this._control.focus()
    }

    render () {
        const options = [
            'name', 'type', 'placeholder'
        ]

        const cn = []
        const props = {}

        options.map((item) => {
            if (typeof this.props[item] !== 'undefined') {
                props[item] = this.props[item]
            }
        })

        props.value = this.state.value

        props.defaultValue = this.state.value

        cn.push(css.control)
        cn.push(css.control_input)
        cn.push(this.props.className)

        const addition = []
        const clearButton = []

        if (this.props.hint) {
            addition.push(<span
                className={css.hint}
                key={[this.keyPrefix, 'hint'].join('.')}
            >{this.props.hint}
            </span>)
        }

        if (this.props.error) {
            cn.push(`${css.control_error}`)

            if (typeof this.props.error === 'string') {
                addition.push(<span className={css.error} key={[this.keyPrefix, 'error'].join('.')}>
                    {this.props.error}
                </span>)
            }
        }

        if (this.state.value && this.props.cleaning) {
            clearButton.push(<span
                className={css.clear}
                key={[this.keyPrefix, 'clear'].join('.')}
                onClick={this.handleClear.bind(this)}
            />)
        }

        if (this.props.maxlength) {
            props.maxlength = this.props.maxlength
        }

        if (this.props.tabindex) {
            props.tabindex = this.props.tabindex
        }

        props.key = [this.keyPrefix, 'control'].join('.')
        props.ref = (c) => {
            this._control = c
        }
        props.onChange = this.handleChange.bind(this)
        props.className = cn.join(' ')

        props.autoComplete = 'off'
        props.autoCorrect = 'off'
        props.autoCapitalize = 'off'
        props.spellCheck = false

        return (
            <div className={css.wrapper} key={[this.keyPrefix, 'wrapper'].join('.')}>
                <label key={[this.keyPrefix, 'label'].join('.')} className={css.label}>
                    <input {...props} />
                    { clearButton }
                </label>

                { addition }
            </div>
        )
    }
}
