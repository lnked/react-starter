import React, { Component } from 'react';
import { Link } from 'react-router';
import styles from './styles.scss';

export default class PageLayout extends Component {

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
        title: 'Page Layout title'
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
                                    activeClassName={styles.layout__navbar__active}>Main</Link>
                                <span className={styles.layout__navbar__separator}>|</span>
                                <Link
                                    to="/page"
                                    className={styles.layout__navbar__link}
                                    activeClassName={styles.layout__navbar__active}>Page</Link>
                            </li>
                            <li className={styles.layout__navbar__item}>
                                <Link
                                    to="/page/page1"
                                    className={styles.layout__navbar__link}
                                    activeClassName={styles.layout__navbar__active}>Page1</Link>
                            </li>
                            <li className={styles.layout__navbar__item}>
                                <Link
                                    to="/page/page2"
                                    className={styles.layout__navbar__link}
                                    activeClassName={styles.layout__navbar__active}>Page2</Link>
                            </li>
                            <li className={styles.layout__navbar__item}>
                                <Link
                                    to="/page/page3"
                                    className={styles.layout__navbar__link}
                                    activeClassName={styles.layout__navbar__active}>Page3</Link>
                            </li>
                            <li className={styles.layout__navbar__item}>
                                <Link
                                    to="pages"
                                    params={{ slug: 'hello' }}
                                    className={styles.layout__navbar__link}
                                    activeClassName={styles.layout__navbar__active}>Create page</Link>
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
