import React, { Component } from 'react';
import { Link, IndexLink } from 'react-router';
import styles from './styles.scss';

export default class Sidebar extends Component {

    createLinkItem (page) {
        const base = '/cp/site';

        return (
            <Link
                key={page.id}
                icon={page.system}
                label={page.title}
                to={[base, page.system].join('/')}
                className={styles.sidebar__section}
                activeClassName={styles.sidebar__section_active}
            />
        );
    }

    render () {
        const pages = [
            {
                id: 1,
                system: 'structure',
                title: 'structure'
            },
            {
                id: 2,
                system: 'menu',
                title: 'menu'
            },
            {
                id: 3,
                system: 'module',
                title: 'module'
            },
            {
                id: 4,
                system: 'storage',
                title: 'storage'
            },
            {
                id: 5,
                system: 'settings',
                title: 'settings'
            }
        ];

        return (
            <nav className={styles.sidebar}>
                <IndexLink
                    to="/cp"
                    className={[styles.sidebar__section, styles.sidebar__logo].join(' ')}
                    activeClassName={styles.sidebar__logo_active}
                />
                {pages.map(this.createLinkItem)}
            </nav>
        );
    }
}
// <Route path="site" component={Page1}>
//     <IndexRoute path="structure" component={Page1} />
//     <Route path="menu" component={Page1} />
//     <Route path="module" component={Page1} />
//     <Route path="storage" component={Page1} />
//     <Route path="settings" component={Page1} />
// </Route>

// <Route path="marketing" component={Page1}>
//     <IndexRoute path="dashboard" component={Page1} />
//     <Route path="invoices" component={Page1} />
//     <Route path="leads" component={Page1} />
//     <Route path="contacts" component={Page1} />
//     <Route path="todo" component={Page1} />
//     <Route path="analytics" component={Page1} />
// </Route>

// <Route path="seo" component={Page1}>
//     <IndexRoute path="analytics" component={Page1} />
//     <Route path="pageWeight" component={Page1} />
//     <Route path="meta" component={Page1} />
//     <Route path="hfu" component={Page1} />
//     <Route path="social" component={Page1} />
//     <Route path="sitemap" component={Page1} />
//     <Route path="robots" component={Page1} />
//     <Route path="counters" component={Page1} />
// </Route>

// <Route path="users" component={Page1}>
//     <IndexRoute path="list" component={Page1} />
//     <Route path="permissions" component={Page1} />
//     <Route path="roles" component={Page1} />
//     <Route path="settings" component={Page1} />
// </Route>

// <Route path="shop" component={Page1}>
//     <IndexRoute path="orders" component={Page1} />
//     <Route path="catalog" component={Page1} />
//     <Route path="customers" component={Page1} />
//     <Route path="affiliate" component={Page1} />
//     <Route path="discounts" component={Page1} />
//     <Route path="exchange" component={Page1} />
//     <Route path="taxes" component={Page1} />
//     <Route path="settings" component={Page1} />
// </Route>

// <Route path="system" component={Page1}>
//     <IndexRoute path="extensions" component={Page1} />
//     <Route path="themes" component={Page1} />
//     <Route path="update" component={Page1} />
//     <Route path="info" component={Page1} />
//     <Route path="mailers" component={Page1} />
//     <Route path="settings" component={Page1} />
// </Route>
