import * as React from 'react'
import * as css from './styles.scss'

import { Title } from 'components'

import image from 'images/cat.jpg'

export function ChangelogPage () {
    document.title = 'Changelog Page'

    return (
        <div className={css.content}>
            <Title size="large" primary>Changelog Page</Title>
            <Title size="large" secondary>Changelog Page</Title>

            <p className={css.description}>
                Reference site about Lorem Ipsum, giving information on its origins.
            </p>

            <img src={image} width={400} height={400} alt=""/>
        </div>
    )
}

export default ChangelogPage
