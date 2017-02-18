import React, { Component } from 'react';
import { Link } from 'react-router';
import styles from './styles.scss';

export default class MainLayout extends Component {

    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         color: props.initialColor
    //     };
    // }

    static propTypes = {
        children: React.PropTypes.object.isRequired,
        title: React.PropTypes.string
    }

    static defaultProps = {
        title: 'Main Layout title'
    }

    render () {
        return (
            <div className={styles.layout}>
                <header className={styles.layout__header}>
                    <h1 className={styles.layout__header__title}>{this.props.title}</h1>
                </header>

                <div className={styles.layout__row}>
                    <aside className={styles.layout__navbar}>
                        <ul>
                            <li className={styles.layout__navbar__item}>
                                <Link
                                    to="/"
                                    className={styles.layout__navbar__link}
                                    activeClassName={styles.layout__navbar__active}
                                >Main</Link>
                                <span className={styles.layout__navbar__separator}>|</span>
                                <Link
                                    to="/page"
                                    className={styles.layout__navbar__link}
                                    activeClassName={styles.layout__navbar__active}
                                >Page</Link>
                            </li>
                            <li className={styles.layout__navbar__item}>
                                <Link
                                    to="/main"
                                    className={styles.layout__navbar__link}
                                    activeClassName={styles.layout__navbar__active}>Main</Link>
                            </li>
                            <li className={styles.layout__navbar__item}>
                                <Link
                                    to="/users"
                                    className={styles.layout__navbar__link}
                                    activeClassName={styles.layout__navbar__active}>Users</Link>
                            </li>
                            <li className={styles.layout__navbar__item}>
                                <Link
                                    to="/widgets"
                                    className={styles.layout__navbar__link}
                                    activeClassName={styles.layout__navbar__active}>Widgets</Link>
                            </li>
                            <li className={styles.layout__navbar__item}>
                                <Link
                                    to="/load"
                                    className={styles.layout__navbar__link}
                                    activeClassName={styles.layout__navbar__active}>Load</Link>
                            </li>
                        </ul>
                    </aside>

                    <main className={styles.layout__main}>
                        {this.props.children}
                    </main>
                </div>
            </div>
        );
    }
}
