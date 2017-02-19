import React, { Component } from 'react';
import { IndexLink, Link } from 'react-router';
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

    // static propTypes = {
    //     isDark: React.PropTypes.bool
    // }

    // static defaultProps = {
    //     isDark: true
    // }

    // componentDidMount () {
    //     document.body.classList.toggle('darkClass', this.props.isDark);
    // }

    // componentWillReceiveProps (nextProps) {
    //     document.body.classList.toggle('darkClass', nextProps.isDark);
    // }

    // componentWillUnmount () {
    //     document.body.classList.remove('darkClass');
    // }

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
                                <IndexLink
                                    to="/"
                                    className={styles.layout__navbar__link}
                                    activeClassName={styles.layout__navbar__active}>Main</IndexLink>
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
                                    to="/pages"
                                    className={styles.layout__navbar__link}
                                    activeClassName={styles.layout__navbar__active}>Create page</Link>
                            </li>
                            <li className={styles.layout__navbar__item}>
                                <Link
                                    to="/load"
                                    className={styles.layout__navbar__link}
                                    activeClassName={styles.layout__navbar__active}>Load</Link>
                            </li>
                            <li className={styles.layout__navbar__item}>
                                <Link
                                    to="/auth"
                                    className={styles.layout__navbar__link}
                                    activeClassName={styles.layout__navbar__active}>Auth</Link>
                            </li>
                            <li className={styles.layout__navbar__item}>
                                <Link
                                    to="/404"
                                    className={styles.layout__navbar__link}
                                    activeClassName={styles.layout__navbar__active}>Error page</Link>
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
