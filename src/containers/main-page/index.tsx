import * as React from 'react'
import * as css from './styles.scss'

import { Badge } from 'components'

import src from 'images/dog.jpg'

export function MainPage () {
    document.title = 'Main Page'

    return (
        <div className={css.content}>
            <h1 className={css.title}>Main Page</h1>
            <Badge>Badge</Badge>
            <Badge bolded={true}>Badge</Badge>
            <p className={css.description}>
                Reference site about Lorem Ipsum, giving information on its origins.
            </p>

            <img src={src} width={400} height={400} alt=""/>

            <div className={css.image} />
        </div>
    )
}

export default MainPage
