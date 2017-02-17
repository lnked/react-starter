import React, { Component } from 'react';
import { render } from 'react-dom';
import { Link } from 'react-router';
import styles from './styles.scss';

export default class MainLayout extends Component {

    static propTypes = {
        children: React.PropTypes.object.isRequired,
        title: React.PropTypes.string
    }

    static defaultProps = {
        title: 'Main Layout title'
    }

    render() {
        return (
            <div className={styles.layout}>
                <header className={styles.layout__header}>
                    <h1 className={styles.layout__header__title}>{this.props.title}</h1>
                </header>

                <div className={styles.layout__row}>
                    <aside className={styles.layout__navbar}>
                        <ul>
                            <li>
                                <Link to="/" className={styles.layout__navbar__link} activeClassName={styles.layout__navbar__active}>Main</Link>
                                <span className={styles.layout__navbar__separator}>|</span>
                                <Link to="/page" className={styles.layout__navbar__link} activeClassName={styles.layout__navbar__active}>Page</Link>
                            </li>
                            <li><Link to="/main" className={styles.layout__navbar__link} activeClassName={styles.layout__navbar__active}>Main</Link></li>
                            <li><Link to="/users" className={styles.layout__navbar__link} activeClassName={styles.layout__navbar__active}>Users</Link></li>
                            <li><Link to="/widgets" className={styles.layout__navbar__link} activeClassName={styles.layout__navbar__active}>Widgets</Link></li>
                        </ul>
                    </aside>

                    <main className={styles.layout__main}>
                        {this.props.children}
                    </main>
                </div>
            </div>
        )
    }
}
