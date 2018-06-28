import * as React from 'react'
import * as css from './styles.scss'

import { Badge, Title } from 'components'

import src from 'images/dog.jpg'

export function MainPage () {
    document.title = 'Main Page'

    return (
        <div className={css.content}>
            <Title type="secondary" center>Main Page</Title>
            <Title size="small" type="primary" center>Main Page</Title>
            <Title size="medium" type="secondary" center>Main Page</Title>

            <Badge>default</Badge>
            <Badge bolded info>info</Badge>
            <Badge bolded normal>normal</Badge>
            <Badge bolded primary>primary</Badge>
            <Badge bolded success>success</Badge>
            <Badge bolded warning>warning</Badge>
            <Badge bolded danger>danger</Badge>

            <p className={css.description}>
                Reference site about Lorem Ipsum, giving information on its origins.
            </p>

            <div className={css.group}>
                <img src={src} width={400} alt=""/>
                <div className={css.image} />
            </div>
        </div>
    )
}

export default MainPage
