import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import css from './styles.scss'

export default class Checkbox extends PureComponent {
    static propTypes = {
        size: PropTypes.string,
        theme: PropTypes.string,
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
        theme: '',
        label: '',
        className: '',
        checked: false,
        handleChange: false
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

    handleChange = (e) => {
        const checked = e.nativeEvent.target.value

        this.setState({...this.state, checked: !this.state.checked}, () => {
            if (this.props.handleChange) {
                this.props.handleChange(checked, this.state.checked)
            }
        })
    }

    renderStatus () {
        const { theme } = this.props

        if (theme) {
            return <span className={`${css.status} ${css[`status_${theme}`]}`} />
        } else {
            return <span className={css.status} />
        }
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
                { this.renderStatus() }
                { this.renderLabel() }
            </label>
        )
    }
}
