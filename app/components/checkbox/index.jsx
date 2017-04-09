import React, { Component, PropTypes } from 'react'
// import PropTypes from 'prop-types'
import css from './styles.scss'

export default class Button extends Component {

    static propTypes = {
        label: PropTypes.string,
        checked: PropTypes.bool
    }

    static defaultProps = {
        bool: false,
        label: ''
    }

    state = { save: false };

    handleChange (field, value) {
        console.log(field, value)
        this.setState({...this.state, [field]: value})
    }

    render () {
        return (
            <label className={css.checkbox}>
                <input
                    type="checkbox"
                    name="save"
                    value="1"
                    checked={this.state.save}
                    onChange={this.handleChange.bind(this, 'save')}
                />
                <span className="c-checkbox__label__middle">{this.props.label}</span>
            </label>
        )
        // checked={this.props.checked}
    }
}
