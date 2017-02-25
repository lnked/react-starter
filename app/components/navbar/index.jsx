import css from './styles.scss';
import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Navbar extends Component {

    constructor (props) {
        super(props);

        this.state = {
            isOpened: false
        };
    }

    handleOpenMenu () {
        this.setState({
            isOpened: !this.state.isOpened
        });
    }

    render () {
        const isOpened = this.state.isOpened;

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
                        <li className={css.navbar__list__item}>
                            <Link to="/home" className={css.navbar__list__item__link}>Home</Link>
                        </li>

                        <li className={css.navbar__list__item}>
                            <Link to="/reviews" className={css.navbar__list__item__link}>Reviews</Link>
                        </li>

                        <li className={css.navbar__list__item}>
                            <Link to="/video" className={css.navbar__list__item__link}>Video</Link>
                        </li>

                        <li className={css.navbar__list__item}>
                            <Link to="/gallery" className={css.navbar__list__item__link}>Gallery</Link>
                        </li>

                        <li className={css.navbar__list__item}>
                            <Link to="/article" className={css.navbar__list__item__link}>Article</Link>
                        </li>

                        <li className={css.navbar__list__item}>
                            <Link to="/news" className={css.navbar__list__item__link}>News</Link>
                        </li>

                        <li className={css.navbar__list__item}>
                            <Link to="/catalog" className={css.navbar__list__item__link}>Catalog</Link>
                        </li>

                        <li className={css.navbar__list__item}>
                            <Link to="/about" className={css.navbar__list__item__link}>About</Link>
                        </li>

                        <li className={css.navbar__list__item}>
                            <Link to="/contacts" className={css.navbar__list__item__link}>Contact us</Link>
                        </li>

                        <li className={css.navbar__list__item}>
                            <Link to="/blog" className={css.navbar__list__item__link}>Blog</Link>
                        </li>

                        <li className={css.navbar__list__item}>
                            <Link to="/basket" className={css.navbar__list__item__link}>Basket</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}
