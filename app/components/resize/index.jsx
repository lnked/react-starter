import React, { Component } from 'react'
import Search from '../search'
import css from './styles.scss'

export default class Navigation extends Component {

    componentWillMount () {
        this.setState({
            width: document.body.clientWidth,
            height: document.body.clientHeight
        })

        console.log(document.body.clientWidth)
    }

    componentDidMount () {
        window.addEventListener('resize', this.updateDimensions)
    }

    componentWillUnmount () {
        window.removeEventListener('resize', this.updateDimensions)
    }

    render () {
        // return (<span>{this.state.width} x {this.state.height}</span>)

        return (
            <nav className={css.navigation}>
                <a className={[css.navigation__link, css.navigation__link_active].join(' ')}>Все</a>

                <a className={css.navigation__link}>Исходящие<span> запросы</span></a>

                <a className={css.navigation__link}>Входящие<span> запросы</span></a>

                <a className={css.navigation__link}>Шаблоны</a>

                <Search />
            </nav>
        )
    }
}
