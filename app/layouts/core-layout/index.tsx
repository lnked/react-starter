import * as React from 'react'
import * as css from './styles'

import { SvgFixer } from 'utils'

import { Aside, RequestsPanel, Sidebar, Navigation } from 'segments'

import { GroupLinks } from 'components'

interface T {
    className?: string;
    children?: React.ReactChild | {} | any[] | boolean;
}

export default class CoreLayout extends React.Component<T, {}> {
    state = {
        title: 'React Starter App'
    }

    componentWillMount () {
        document.title = this.state.title
        window.prerenderReady = true
    }

    componentDidMount () {
        SvgFixer()
    }

    render () {
        const { children } = this.props

        return (
            <div className={css.layout}>
                <section className={css.main}>
                    <div className={css.sidebar}>
                        <Sidebar />
                        <Aside title="Интернет магазин">
                            <GroupLinks
                                base="shop"
                                links={[
                                    {
                                        name: 'Корзина',
                                        slug: 'groups'
                                    },
                                    {
                                        name: 'Заказы',
                                        slug: 'orders'
                                    },
                                    {
                                        name: 'Категории каталога',
                                        slug: 'categories'
                                    },
                                    {
                                        name: 'Каталог товаров',
                                        slug: 'catalog'
                                    },
                                    {
                                        name: 'Промокоды',
                                        slug: 'promotional'
                                    },
                                    {
                                        name: 'Производители',
                                        slug: 'manufacturers'
                                    },
                                    {
                                        name: 'Теги',
                                        slug: 'tags'
                                    },
                                    {
                                        name: 'Распродажи',
                                        slug: 'sales'
                                    },
                                    {
                                        name: 'Бонусная система',
                                        slug: 'loyality'
                                    },
                                    {
                                        name: 'Покупатели',
                                        slug: 'customers'
                                    },
                                    {
                                        name: 'Настройки',
                                        slug: 'settings'
                                    }
                                ]}
                            />
                        </Aside>
                    </div>

                    <div className={css.body}>
                        <header className={css.header}>
                            <Navigation />
                        </header>

                        <RequestsPanel />

                        <div className={css.content}>
                            {children}
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

// import React, { Component } from 'react'
// import * as PropTypes from 'prop-types'
// import css from './styles.scss'

// import { Sidebar } from 'segments'

// export default class CoreLayout extends Component {
//     static propTypes = {
//         children: oneOfType([
//             object,
//             string,
//             array
//         ])
//     }

//     state = {
//         title: 'React Starter App'
//     }

//     componentWillMount () {
//         document.title = this.state.title
//         window.prerenderReady = true
//     }

//     render () {
//         // import {Helmet} from "react-helmet"
//         // <div className="application">
//         //     <Helmet>
//         //         <meta charSet="utf-8" />
//         //         <title>My Title</title>
//         //         <link rel="canonical" href="http://mysite.com/example" />
//         //     </Helmet>
//         // </div>

//         // <Parent>
//         //     <Helmet>
//         //         <title>My Title</title>
//         //         <meta name="description" content="Helmet application" />
//         //     </Helmet>

//         //     <Child>
//         //         <Helmet>
//         //             <title>Nested Title</title>
//         //             <meta name="description" content="Nested component" />
//         //         </Helmet>
//         //     </Child>
//         // </Parent>

//         // <header className={css.header}>
//         //     <Navigation />
//         // </header>

//         // <aside className={css.sidebar}>
//         //     <Sidebar />
//         // </aside>

//         return (
//             <div className={css.layout}>
//                 <section className={css.main}>
//                     <div className={css.content}>
//                         { this.props.children }
//                     </div>
//                 </section>
//             </div>
//         )
//     }
// }
