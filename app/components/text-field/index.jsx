import React, { Component } from 'react'
import PropTypes from 'prop-types'
import css from './styles.scss'

export default class TextField extends Component {

    static propTypes = {
        type: PropTypes.string,
        name: PropTypes.string.isRequired,
        focus: PropTypes.bool,
        value: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.number
        ]),
        children: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.number
        ]),
        error: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.bool
        ]),
        hint: PropTypes.string,
        multiline: PropTypes.bool,
        className: PropTypes.string,
        handleChange: PropTypes.func,
        placeholder: PropTypes.string
    }

    static defaultProps = {
        type: 'text',
        focus: false,
        className: '',
        multiline: false,
        placeholder: 'Введите текст…',
        handleChange: (value) => { console.log(': = ', value) }
    }

    constructor (props) {
        super(props)

        this.keyPrefix = Math.random().toString()
        this.handleChange = this.handleChange.bind(this)
    }

    componentWillMount () {
        this.setState({
            value: this.props.value || this.props.children
        })
    }

    componentDidMount () {
        if (this.props.focus) {
            this._control.focus()
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

        if (this.state.value && !this.props.multiline) {
            clearButton.push(
                <span className={css.clear}
                    key={[this.keyPrefix, 'clear'].join('.')}
                    onClick={this.handleClear.bind(this)}
                />
            )
        }

        props.key = [this.keyPrefix, 'control'].join('.')
        props.ref = (c) => { this._control = c }
        props.onChange = this.handleChange.bind(this)
        props.className = cn.join(' ')

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
