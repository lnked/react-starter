import styles from './styles.scss';
import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Navbar extends Component {
    render () {
        return (
            <nav className={styles.navbar}>
                <div className={[styles.navbar__menu, styles.navbar__menu_top].join(' ')}>
                    <Link to="#" className={styles.navbar__logo}>Logo</Link>
                    <Link to="#" className={styles.navbar__trigger}>
                        <s className={styles.navbar__trigger__line} />
                        <s className={styles.navbar__trigger__line} />
                    </Link>
                </div>
                <div className={[styles.navbar__menu, styles.navbar__menu_bottom].join(' ')}>
                    <div className={styles.navbar__screen} />

                    <ul className={styles.navbar__list}>
                        <li className={styles.navbar__list__item}>
                            <Link to="#" className={styles.navbar__list__item__link}>Home</Link>
                        </li>
                        <li className={styles.navbar__list__item}>
                            <Link to="#" className={styles.navbar__list__item__link}>About</Link>
                        </li>
                        <li className={styles.navbar__list__item}>
                            <Link to="#" className={styles.navbar__list__item__link}>Contact</Link>
                        </li>
                        <li className={styles.navbar__list__item}>
                            <Link to="#" className={styles.navbar__list__item__link}>Blog</Link>
                        </li>
                        <li className={styles.navbar__list__item}>
                            <Link to="#" className={styles.navbar__list__item__link}>GitHub</Link>
                        </li>
                        <li className={styles.navbar__list__item}>
                            <Link to="#" className={styles.navbar__list__item__link}>Twitter</Link>
                        </li>
                        <li className={styles.navbar__list__item}>
                            <Link to="#" className={styles.navbar__list__item__link}>Apple</Link>
                        </li>
                        <li className={styles.navbar__list__item}>
                            <Link to="#" className={styles.navbar__list__item__link}>Google</Link>
                        </li>
                        <li className={styles.navbar__list__item}>
                            <Link to="#" className={styles.navbar__list__item__link}>Wang</Link>
                        </li>
                        <li className={styles.navbar__list__item}>
                            <Link to="#" className={styles.navbar__list__item__link}>Yahoo</Link>
                        </li>
                        <li className={styles.navbar__list__item}>
                            <Link to="#" className={styles.navbar__list__item__link}>W3C</Link></li>
                    </ul>
                </div>
            </nav>
        );
    }
}

// <ul className={styles.navbar}>
//     <li className={styles.navbar__item}>
//         <Link to="/users" label="Users label" icon="inbox" className={styles.navbar__link}>Main page</Link>
//     </li>
//     <li className={styles.navbar__item}>
//         <Link to="/home" className={styles.navbar__link}>Home page</Link>
//     </li>
//     <li className={styles.navbar__item}>
//         <Link to="/users" className={styles.navbar__link}>Users</Link>
//     </li>
// </ul>

// <div class="custom-menu-wrapper">
//     <div class="pure-menu custom-menu custom-menu-top">
//         <a href="#" class="pure-menu-heading custom-menu-brand">Brand</a>
//         <a href="#" class="custom-menu-toggle" id="toggle"><s class="bar"></s><s class="bar"></s></a>
//     </div>
//     <div class="pure-menu pure-menu-horizontal pure-menu-scrollable custom-menu custom-menu-bottom custom-menu-tucked" id="tuckedMenu">
//         <div class="custom-menu-screen"></div>

//     </div>
// </div>
