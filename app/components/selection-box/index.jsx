import * as React from 'react'
import * as PropTypes from 'prop-types'
import * as css from './styles'

export default class SelectionBox extends React.PureComponent<{}, {}> {
    static propTypes = {
        items: PropTypes.array,
        name: PropTypes.string,
        type: PropTypes.string,
        isMultiple: PropTypes.bool,
        handleChange: PropTypes.oneOfType([
            PropTypes.func,
            PropTypes.bool
        ]),
        checked: PropTypes.oneOfType([
            PropTypes.array,
            PropTypes.string,
            PropTypes.number
        ])
    }

    static defaultProps = {
        items: [],
        type: 'default',
        isMultiple: false,
        handleChange: false
    }

    state = {
        checked: this.props.checked
    }

    handleChange = (e) => {
        const value = Number(e.target.value)

        if (this.props.isMultiple) {
            let selected = []

            if (value !== null) {
                selected = this.state.checked.slice(0)
                const index = selected.indexOf(value)

                if (index >= 0) {
                    selected.splice(index, 1)
                } else {
                    selected.push(value)
                }

                this.setState({
                    checked: selected
                })
            }
        } else {
            this.setState({
                checked: value
            })
        }

        if (this.props.handleChange) {
            this.props.handleChange(value)
        }
    }

    renderGroup = () => {
        if (this.props.items && this.props.items.length) {
            const group = []
            const items = this.props.items
            const checked = this.state.checked
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

            items.map((props, id) => {
                if (!isMultiple && props.value === Number(checked)) {
                    props.checked = true
                } else if (isMultiple && checked.indexOf(props.value) >= 0) {
                    props.checked = true
                } else {
                    props.checked = false
                }

                group.push(<div key={id.toString()} className={`${css.item} ${css[`item_${this.props.type}`]}`}>
                    <label className={css.label}>
                        <input
                            type={type}
                            name={name}
                            value={props.value}
                            checked={props.checked}
                            className={css.input}
                            onChange={this.handleChange.bind(this)}
                        />

                        <span className={css.visible}>
                            { props.label }
                        </span>
                    </label>
                </div>)
            })

            return (
                <div className={css.group}>
                    { group }
                </div>
            )
        }
    }

    render () {
        return (
            <div className={css.group}>
                { this.renderGroup() }
            </div>
        )
    }
}
