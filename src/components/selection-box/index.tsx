import * as React from 'react'
import * as css from './styles.scss'

interface T {
    items: any;
    name: string;
    type: string;
    isMultiple: boolean;
    checked: any | string | number;
    handleChange?: (value: any) => void | boolean;
}

export default class SelectionBox extends React.PureComponent<T, {}> {
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

        const { checked } = this.state
        const { isMultiple } = this.props

        if (isMultiple) {
            let selected: any = []

            if (value !== null) {
                selected = checked.slice(0)
                const index = selected.indexOf(value)

                if (index >= 0) {
                    selected.splice(index, 1)
                } else {
                    selected.push(value)
                }

                this.setState({
                    ...this.state, checked: selected
                })
            }
        } else {
            this.setState({
                ...this.state, checked: value
            })
        }

        if (this.props.handleChange) {
            this.props.handleChange(value)
        }
    }

    renderGroup = (): any => {
        if (this.props.items && this.props.items.length) {
            const group: any = []

            const { checked } = this.state
            const { type, name, items, isMultiple } = this.props

            let propType
            let propName

            if (isMultiple) {
                propType = 'checkbox'
                propName = `${name}[]`
            } else {
                propType = 'radio'
                propName = name
            }

            items.map((props, id) => {
                if (!isMultiple && props.value === Number(checked)) {
                    props.checked = true
                } else if (isMultiple && checked.indexOf(props.value) >= 0) {
                    props.checked = true
                } else {
                    props.checked = false
                }

                group.push(
                    <div key={id} className={`${css.item} ${css[`item_${type}`]}`}>
                        <label className={css.label}>
                            <input
                                type={propType}
                                name={propName}
                                value={props.value}
                                checked={props.checked}
                                className={css.input}
                                onChange={this.handleChange}
                            />

                            <span className={css.visible}>
                                { props.label }
                            </span>
                        </label>
                    </div>
                )
            })

            return (
                <div className={css.group}>
                    { group }
                </div>
            )
        }

        return ''
    }

    render () {
        return (
            <div className={css.group}>
                { this.renderGroup() }
            </div>
        )
    }
}
