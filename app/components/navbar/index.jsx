import styles from './styles.scss';
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
            <nav className={styles.navbar}>
                <div className={[styles.navbar__menu, styles.navbar__menu_top].join(' ')}>
                    <Link to="#" className={styles.navbar__logo}>Logo</Link>
                    <span className={
                            !isOpened
                                ? styles.navbar__trigger
                                : [styles.navbar__trigger, styles.navbar__trigger_open].join(' ')}
                        onClick={this.handleOpenMenu.bind(this)}>
                        <s className={styles.navbar__trigger__line} />
                        <s className={styles.navbar__trigger__line} />
                    </span>
                </div>

                <div className={[styles.navbar__menu, styles.navbar__menu_bottom].join(' ')}>
                    <div className={styles.navbar__screen} />

                    <ul className={styles.navbar__list}>
                        <li className={styles.navbar__list__item}>
                            <Link to="/home" className={styles.navbar__list__item__link}>Home</Link>
                        </li>

                        <li className={styles.navbar__list__item}>
                            <Link to="/reviews" className={styles.navbar__list__item__link}>Reviews</Link>
                        </li>

                        <li className={styles.navbar__list__item}>
                            <Link to="/video" className={styles.navbar__list__item__link}>Video</Link>
                        </li>

                        <li className={styles.navbar__list__item}>
                            <Link to="/gallery" className={styles.navbar__list__item__link}>Gallery</Link>
                        </li>

                        <li className={styles.navbar__list__item}>
                            <Link to="/article" className={styles.navbar__list__item__link}>Article</Link>
                        </li>

                        <li className={styles.navbar__list__item}>
                            <Link to="/news" className={styles.navbar__list__item__link}>News</Link>
                        </li>

                        <li className={styles.navbar__list__item}>
                            <Link to="/catalog" className={styles.navbar__list__item__link}>Catalog</Link>
                        </li>

                        <li className={styles.navbar__list__item}>
                            <Link to="/about" className={styles.navbar__list__item__link}>About</Link>
                        </li>

                        <li className={styles.navbar__list__item}>
                            <Link to="/contacts" className={styles.navbar__list__item__link}>Contact us</Link>
                        </li>

                        <li className={styles.navbar__list__item}>
                            <Link to="/blog" className={styles.navbar__list__item__link}>Blog</Link>
                        </li>

                        <li className={styles.navbar__list__item}>
                            <Link to="/basket" className={styles.navbar__list__item__link}>Basket</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}
