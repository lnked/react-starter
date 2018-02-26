import * as React from 'react'
// import * as css from './styles'

import { Layout, Aside, Content } from 'segments'

import { GroupLinks } from 'components'

export default class Shop extends React.Component<{}, {}> {
    render () {
        return (
            <Layout>
                <Aside>
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

                <Content>
                    Settings!
                </Content>
            </Layout>
        )
    }
}
