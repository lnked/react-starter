import * as React from 'react'
import * as css from './styles.scss'

// function dec(id){
//     console.log('evaluated', id);
//     return (target, property, descriptor) => console.log('executed', id);
// }

// class Example {
//     @dec(1)
//     @dec(2)
//     method(){}
// }

// function dec(target, prop, descriptor){
//     let {initializer} = descriptor;
//     delete descriptor.initializer;
//     delete descriptor.writable;

//     descriptor.get = function(){
//         return initializer.call(this);
//     };
// }

// var i = 0;

// class Example {
//     @dec
//     static prop = i++;
// }

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
        return (
            <div className={css.content}>
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

// export { MainPage }
export default MainPage
