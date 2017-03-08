import css from './styles.scss'
import React, { Component } from 'react'
import { Link } from 'react-router'

export default class Navbar extends Component {

    constructor (props) {
        super(props)

        this.state = {
            isOpened: false
        }
    }

    handleOpenMenu () {
        this.setState({
            isOpened: !this.state.isOpened
        })
    }

    navbarItem (item) {
        return (
            <li className={css.navbar__list__item} key={item.id}>
                <Link to={item.url} className={css.navbar__list__item__link}>{item.title}</Link>
            </li>
        )
    }

    render () {
        // const isOpened = this.state.isOpened
        const { isOpened } = this.state

        const navbar = [
            {
                url: '/home',
                title: 'Home'
            },
            {
                url: '/reviews',
                title: 'Reviews'
            },
            {
                url: '/video',
                title: 'Video'
            },
            {
                url: '/gallery',
                title: 'Gallery'
            },
            {
                url: '/article',
                title: 'Article'
            },
            {
                url: '/news',
                title: 'News'
            },
            {
                url: '/catalog',
                title: 'Catalog'
            },
            {
                url: '/about',
                title: 'About'
            },
            {
                url: '/contacts',
                title: 'Contact us'
            },
            {
                url: '/blog',
                title: 'Blog'
            },
            {
                url: '/basket',
                title: 'Basket'
            }
        ]

        return (
            <nav className={css.navbar}>
                <div className={[css.navbar__menu, css.navbar__menu_top].join(' ')}>
                    <Link to="#" className={css.navbar__logo}>Logo</Link>
                    <span className={
                            !isOpened
                                ? css.navbar__trigger
                                : [css.navbar__trigger, css.navbar__trigger_open].join(' ')}
                        onClick={this.handleOpenMenu.bind(this)}>
                        <s className={css.navbar__trigger__line} />
                        <s className={css.navbar__trigger__line} />
                    </span>
                </div>

                <div className={[css.navbar__menu, css.navbar__menu_bottom].join(' ')}>
                    <div className={css.navbar__screen} />

                    <ul className={css.navbar__list}>
                        {navbar.map(this.navbarItem)}
                    </ul>
                </div>
            </nav>
        )
    }
}
