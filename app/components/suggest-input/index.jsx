import React, { Component } from 'react'
import PropTypes from 'prop-types'
import css from './styles.scss'

export default class SuggestInput extends Component {
    static propTypes = {
        name: PropTypes.string,
        result: PropTypes.array,
        value: PropTypes.string,
        placeholder: PropTypes.string
    }

    static defaultProps = {
        result: [],
        placeholder: 'Поиск'
    }

    state = {
        open: false,
        filterText: this.props.value,
        suggestText: ''
    }

    strip = (html) => {
        const tmp = document.createElement('DIV')

        tmp.innerHTML = html
        return tmp.textContent || tmp.innerText || ''
    }

    handleChange = (e) => {
        let suggest = ''
        const value = e.target.value

        const { result } = this.props

        if (result && Object.keys(result).length) {
            const length = value.length
            const findedText = value.toLowerCase()

            let val
            let temp
            let findedValue

            result.map((node) => {
                temp = this.strip(node.value)
                findedValue = temp.substr(0, length).toLowerCase()

                if (findedValue.indexOf(findedText) >= 0) {
                    val = temp
                }
            })

            if (val) {
                const ts = val.substr(0, value.length).toLowerCase()
                const tf = value.toLowerCase()

                const findIndex = ts.indexOf(tf)

                if (findIndex >= 0 && !suggest) {
                    suggest = `${value.substr(0, value.length)}${val.substr(value.length, val.length)}`
                }
            }
        }

        if (!value) {
            suggest = ''
        }

        this.setState({...this.state,
            filterText: value,
            suggestText: suggest,
            open: value !== ''
        })
    }

    render () {
        const {
            name,
            placeholder
        } = this.props

        const {
            filterText,
            suggestText
        } = this.state

        return (
            <div className={css.textinput}>
                <input
                    name={name}
                    value={filterText}
                    autoComplete={false}
                    placeholder={placeholder}
                    onChange={this.handleChange.bind(this)}
                    className={css.textinput__main}
                />

                <input
                    readOnly
                    value={suggestText}
                    className={css.textinput__autocomplete}
                />
            </div>
        )
    }
}
