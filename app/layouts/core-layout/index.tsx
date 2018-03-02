import * as React from 'react'
import * as css from './styles'

import axios from 'axios'

import { SvgFixer } from 'utils'

import { Aside, Navigation, RequestsPanel, Sidebar } from 'segments'

import { GroupLinks } from 'components'

interface T {
    className?: string;
    children?: React.ReactChild | {} | any[] | boolean;
}

interface S {
    title: string;
    pages: any;
}

export default class CoreLayout extends React.Component<T, S> {
    state = {
        title: 'React Starter App',
        pages: []
    }

    componentWillMount () {
        document.title = this.state.title
    }

    componentDidMount () {
        SvgFixer()

        this._handlePagesLoad()
    }

    _handlePagesLoad () {
        axios
            .get('/api/pages')
            .then((response) => response.data)
            .then(({ data }) => {
                const pages = JSON.parse(data)
                this.setState({ pages })
            })
            .catch((err) => {
                console.log(err)
            })
    }

    render () {
        const { children } = this.props

        return (
            <div className={css.layout}>
                <section className={css.main}>
                    <div className={css.sidebar}>
                        <Sidebar pages={this.state.pages} />
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
