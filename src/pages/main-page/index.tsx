import * as React from 'react'
import * as css from './styles.scss'

import classNames from 'classnames/bind'

import {
    STORE_UI,
    STORE_APP,
    STORE_ROUTER
} from 'settings/constants'

import { inject, observer } from 'mobx-react'

import { Icon } from 'components'

// import src from 'pages/main-page/assets/image.jpg'

const cx = classNames.bind(css)

@inject(STORE_UI, STORE_APP, STORE_ROUTER)
@observer
export class MainPage extends React.Component<any, any> {
    componentDidMount () {
        document.title = 'Main Page'
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

                <p>You can use SVG Sprite icons</p>

                <div className={css.iconSet}>
                    <Icon symbol="favorite" className={cx({icon: true, icon1: true})} />
                    <Icon symbol="favorite" className={cx({icon: true, icon2: true})} />
                    <Icon symbol="favorite" className={cx({icon: true, icon3: true})} />
                    <Icon symbol="favorite" className={cx({icon: true, icon4: true})} />
                    <Icon symbol="favorite" className={cx({icon: true, icon5: true})} />
                    <Icon symbol="favorite" className={cx({icon: true, icon6: true})} />
                    <Icon symbol="favorite" className={cx({icon: true, icon7: true})} />
                </div>

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
