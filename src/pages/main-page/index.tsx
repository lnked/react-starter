import * as React from 'react'
import * as css from './styles.scss'

import { classes } from 'helpers'

import { Icon } from 'components'

import { STORE_UI, STORE_APP, STORE_ROUTER } from 'settings/constants'

import { inject, observer } from 'mobx-react'

const cx = classes.bind(css)

@inject(STORE_UI, STORE_APP, STORE_ROUTER)
@observer
class MainPage extends React.Component<any, any> {
    renderIcons = () => {
        return (
            <div className={css.iconSet}>
                <Icon symbol="favorite" className={cx({ icon: true, icon1: true })} />
                <Icon symbol="favorite" className={cx({ icon: true, icon2: true })} />
                <Icon symbol="favorite" className={cx({ icon: true, icon3: true })} />
                <Icon symbol="favorite" className={cx({ icon: true, icon4: true })} />
                <Icon symbol="favorite" className={cx({ icon: true, icon5: true })} />
                <Icon symbol="favorite" className={cx({ icon: true, icon6: true })} />
                <Icon symbol="favorite" className={cx({ icon: true, icon7: true })} />
            </div>
        )
    }

    render () {
        const { location, push, goBack } = this.props[STORE_ROUTER]

        return (
            <div className={css.content}>
                <div className={css.location}>
                    <span>Current pathname: {location.pathname}</span>
                    <button onClick={() => push('/test')}>Change url</button>
                    <button onClick={() => goBack()}>Go Back</button>
                </div>

                <p className={css.description}>Отличный сборщик рекат проектов</p>

                <ul className={css.list}>
                    <li>HMR</li>
                    <li>PWA</li>
                    <li>Typescript</li>
                    <li>Jest/Enzyme</li>
                </ul>

                <p>You can use SVG Sprite icons</p>

                {this.renderIcons()}

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

export { MainPage }
export default MainPage
