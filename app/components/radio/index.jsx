import * as React from 'react'
import PropTypes from 'prop-types'
import * as css from './styles'

export default class Radio extends React.PureComponent<{}, {}> {
    static propTypes = {
        name: PropTypes.string.isRequired,
        checked: PropTypes.bool,
        label: PropTypes.string,
        children: PropTypes.string,
        handleChange: PropTypes.func,
        value: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.number
        ])
    }

    static defaultProps = {
        label: '',
        checked: false,
        handleChange: (value) => {
            console.log('check radio: = ', value)
        }
    }

    handleChange = (e) => {
        this.props.handleChange(e.nativeEvent.target.value)
    }

    render () {
        return (
            <label className={css.radio}>
                <input
                    type="radio"
                    name={this.props.name}
                    value={this.props.value}
                    className={css.input}
                    checked={this.props.checked}
                    onChange={this.handleChange.bind(this)}
                />
                <span className={css.label}>{this.props.label || this.props.children}</span>
            </label>
        )
    }
}
