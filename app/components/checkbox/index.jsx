import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import css from './styles.scss'

export default class Checkbox extends PureComponent {
    static propTypes = {
        size: PropTypes.string,
        name: PropTypes.string.isRequired,
        label: PropTypes.string,
        children: PropTypes.string,
        checked: PropTypes.bool,
        className: PropTypes.string,
        handleChange: PropTypes.oneOfType([
            PropTypes.func,
            PropTypes.bool
        ]),
        value: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.number
        ])
    }

    static defaultProps = {
        size: 'normal',
        label: '',
        className: '',
        checked: false,
        handleChange: false
    }

    constructor (props) {
        super(props)

        this.handleChange = this.handleChange.bind(this)
    }

    componentWillMount () {
        this.setState({
            checked: this.props.checked
        })
    }

    componentWillReceiveProps (nextProps) {
        if (this.props.checked !== nextProps.checked) {
            this.setState({...this.props, checked: nextProps.checked})
        }
    }

    handleChange (e) {
        const checked = e.nativeEvent.target.value

        this.setState({...this.state, checked: !this.state.checked}, () => {
            if (this.props.handleChange) {
                this.props.handleChange(checked, this.state.checked)
            }
        })
    }

    renderLabel () {
        if (this.props.label) {
            return (
                <span className={css.label}>{this.props.label || this.props.children}</span>
            )
        }
    }

    render () {
        return (
            <label className={`${css.checkbox} ${this.props.className} ${css[`checkbox_${this.props.size}`]}`}>
                <input
                    type="checkbox"
                    name={this.props.name}
                    value={this.props.value}
                    className={css.input}
                    checked={this.state.checked}
                    onChange={this.handleChange.bind(this)}
                />
                <span className={css.status} />
                { this.renderLabel() }
            </label>
        )
    }
}
