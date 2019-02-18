import * as React from 'react'
import * as css from './styles.scss'

import { Classes } from 'helpers'

import { Icon, Button, Post } from 'components'

import { STORE_UI, STORE_APP, STORE_ROUTER } from 'settings'

import { inject, observer } from 'mobx-react'

const cx = Classes.bind(css)

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
          <Button handleClick={() => push('/test')}>Change url</Button>
          <Button handleClick={() => goBack()}>Go Back</Button>
        </div>

        <p className={css.description}>Отличный сборщик рекат проектов</p>

        <Post />
        <Post />

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
