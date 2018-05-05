import * as React from 'react'
import * as css from './styles.scss'

export default function ChangelogPage () {
    document.title = 'Changelog Page'

    return (
        <div className={css.content}>
            <h1 className={css.title}>Changelog Page</h1>
            <p className={css.description}>
                Reference site about Lorem Ipsum, giving information on its origins.
            </p>
        </div>
    )
}
