import * as React from 'react'
import * as css from './styles.scss'

import { Title, Picture, Input } from 'components'

export function ChangelogPage () {
    document.title = 'Changelog Page'

    return (
        <div className={css.content}>
            <Title size="huge" type="primary" center>Changelog Page</Title>
            <Title size="medium" type="secondary" center>Changelog Page</Title>

            <Input type="text" />

            <p className={css.description}>
                Reference site about Lorem Ipsum, giving information on its origins.
            </p>

            <Picture image={require('images/dog.jpg')} width={400} alt="" />
            <Picture image={require('images/cat.jpg')} width={400} alt="" />
        </div>
    )
}

export default ChangelogPage
