import * as React from 'react'
import * as css from './styles'

import { SvgFixer } from 'utils'

import { Aside, Navigation, RequestsPanel, Sidebar } from 'segments'

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

