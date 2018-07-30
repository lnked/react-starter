import * as React from 'react'
import * as css from './styles.scss'

import {
    STORE_UI,
    STORE_APP,
    STORE_ROUTER
} from 'settings/constants'

import { inject, observer } from 'mobx-react'

// import src from 'pages/main-page/assets/image.jpg'

@inject(STORE_UI, STORE_APP, STORE_ROUTER)
@observer
export class MainPage extends React.Component<any, any> {
    componentDidMount () {
        document.title = 'Main Page'

        if (location.protocol.indexOf('https')) {
            Notification.requestPermission((permission) => {
                console.log('Результат запроса прав:', permission)

                const notification = new Notification('Сколько ТЫЖ программистов нужно чтобы вкрутить лампочку?',
                    { body: 'Только ты!', dir: 'auto', icon: 'icon.jpg' }
                )

                notification.onshow = () => { console.log('onshow') }
                notification.onclick = () => { console.log('click') }
                notification.onerror = () => { console.log('onerror') }
            })
        }
    }

    render () {
        return (
            <div className={css.content}>
                {/*
                <Title type="secondary" center>Main Page</Title>
                <Title size="small" type="primary" center>Main Page</Title>
                <Title size="medium" type="secondary" center>Main Page</Title>
                */}

                <p className={css.description}>
                    Отличный сборщик рекат проектов
                </p>

                <ul>
                    <li>HMR</li>
                    <li>PWA</li>
                    <li>Typescript</li>
                    <li>Jest/Enzyme</li>
                </ul>
                {/*
                <div className={css.group}>
                    <div className={css.image} />
                    <img src={src} alt="" />
                </div>
                */}
            </div>
        )
    }
}

export default MainPage
