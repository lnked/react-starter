import * as React from 'react'
// import * as css from './styles'

import { Layout, Aside, Content } from 'segments'

export default class Settings extends React.Component<{}, {}> {
    render () {
        return (
            <Layout>
                <Aside>
                    Настройка меню
                    Настройки системы
                    Оптимизировать
                    Виджеты
                    Настройки модулей
                    Кэширование
                    Файл-менеджер
                    Онлайн-поддержка
                    База знаний
                    Проверка файлов
                    Шаблоны сообщений
                </Aside>

                <Content>
                    Settings!
                </Content>
            </Layout>
        )
    }
}
