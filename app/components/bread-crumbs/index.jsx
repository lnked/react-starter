import React, { Component } from 'react'
import PropTypes from 'prop-types'
import css from './styles.scss'

export default class BreadCrumbs extends Component {
    static propTypes = {
        path: PropTypes.array,
        size: PropTypes.string,
        className: PropTypes.string
    }

    static defaultProps = {
        size: 'normal',
        className: ''
    }

    renderPath () {
        const {
            path
        } = this.props

        if (path && path.length) {
            const list = []

            path.map((item, id) => {
                list.push(
                    <li key={id} className={`${css.item} ${css[`item_${this.props.size}`]}`}>
                        <a href={item.link} className={css.link}>{ item.title }</a>
                    </li>
                )
            })

            return (
                <ul className={css.list}>
                    { list }
                </ul>
            )
        }
    }

    render () {
        return (
            <div className={`${css.crumbs} ${this.props.className}`}>
                { this.renderPath() }
            </div>
        )
    }
}
