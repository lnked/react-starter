import React, { Component } from 'react'
import css from './styles.scss'

import { Logo, SidebarIcon } from 'components'

const base = '/'

export default class Sidebar extends Component {
    renderPages () {
        const pages = [
            {
                id: 1,
                icon: 'dashboard',
                title: 'Рабочий стол',
                system: 'dashboard',
                component: 'dashboard'
            },
            {
                id: 2,
                icon: 'structure',
                title: 'Страницы',
                system: 'structure',
                component: 'structure'
            }
        ]

        return pages.map((props, id) => {
            return <SidebarIcon key={id} {...props} link={`${base}/${props.system}`} />
        })
    }

    render () {
        return (
            <nav className={css.sidebar}>
                <Logo link={base} />

                { this.renderPages() }

                <SidebarIcon
                    key="site.settings"
                    system="settings"
                    title="Настройки сайта"
                    link={`${base}/settings`}
                    className={css.settings}
                />
            </nav>
        )
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
