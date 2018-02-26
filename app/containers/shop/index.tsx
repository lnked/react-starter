import * as React from 'react'
// import * as css from './styles'

import { Layout, Aside, Content } from 'segments'

export default class Shop extends React.Component<{}, {}> {
    render () {
        return (
            <Layout>
                <Aside>
                    Корзина
                    Настройки
                    Заказы
                    Покупатели
                    Каталог товаров
                    Категории каталога
                    Промокоды
                    Теги
                    Производители
                    Распродажи
                    Бонусная система
                </Aside>

                <Content>
                    Settings!
                </Content>
            </Layout>
        )
    }
}
