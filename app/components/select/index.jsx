import React, { PureComponent } from 'react'
import { propTypes, defaultProps, oneOfType, object, string, array, bool, func, number } from 'prop-types'
import css from './styles.scss'

export default class Select extends PureComponent {

    static propTypes = {
        name: string,
        isMultiple: bool,
        className: string,
        handleChange: func,
        placeholder: string,
        selectedOption: oneOfType([
            array,
            string,
            number
        ]),
        items: oneOfType([
            array,
            object
        ])
    }

    static defaultProps = {
        items: [],
        className: '',
        isMultiple: false,
        selectedOption: false,
        placeholder: 'Выберите из списка',
        handleChange: (value) => { console.log('check checkbox: = ', value) }
    }

    constructor (props) {
        super(props)

        this.handleToggle = this.handleToggle.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    componentWillMount () {
        this.setState({
            open: false,
            selectedOption: this.props.selectedOption
        })
    }

    handleToggle () {
        this.setState({
            open: !this.state.open
        })

        console.log('toggle: ', this.state.open)
    }

    handleChange (value) {
        value = value.toString()

        console.log(value)

        if (this.props.isMultiple) {
            let selected = []

            if (value !== null) {
                selected = this.state.selectedOption.slice(0)
                const index = selected.indexOf(value)

                if (index >= 0) {
                    selected.splice(index, 1)
                } else {
                    selected.push(value)
                }

                this.setState({
                    selectedOption: selected
                })
            }
        } else {
            this.setState({
                open: false,
                selectedOption: value
            })
        }

        console.log('selectedOption: ', this.state.selectedOption)

        this.props.handleChange(value)
    }

    renderControl () {
        return (
            <div className={css.control}>
                <div className={css.choosen} onClick={this.handleToggle.bind(this)}>
                    {this.props.placeholder}
                </div>

                <div className={css.arrow} />
            </div>
        )
    }

    stringify (value) {
        if (typeof value === 'object') {
            value.map((item, id) => {
                value[id] = item.toString()
            })
        } else {
            value = value.toString()
        }

        return value
    }

    renderOptions () {
        if (this.props.items && Object.keys(this.props.items).length) {
            const options = []
            const items = this.props.items
            const checked = this.stringify(this.state.selectedOption)
            const isMultiple = this.props.isMultiple

            let name
            let type

            if (this.props.isMultiple) {
                type = 'checkbox'
                name = `${this.props.name}[]`
            } else {
                type = 'radio'
                name = this.props.name
            }

            Object.keys(items).map((id) => {
                const value = items[id]

                let selected = false

                id = id.toString()

                if (!isMultiple && id === checked) {
                    selected = true
                } else if (isMultiple && checked.indexOf(id) >= 0) {
                    selected = true
                } else {
                    selected = false
                }

                options.push(
                    <label key={id.toString()} className={css.option}>
                        <input
                            type={type}
                            name={name}
                            value={id}
                            className={css.input}
                            checked={selected}
                            onChange={this.handleChange.bind(this, id)}
                        />
                        <span className={css.name}>{ value }</span>
                    </label>
                )
            })

            return (
                <div className={css.dropdown}>
                    { options }
                </div>
            )
        }
    }

    render () {
        const className = []

        className.push(css.select)

        if (this.state.open) {
            className.push(css.select_open)
        }

        return (
            <div className={className.join(' ')}>
                { this.renderControl() }
                { this.renderOptions() }
            </div>
        )
    }
}
