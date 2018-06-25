import * as React from 'react'
import * as css from './styles.scss'

export function ChangelogPage () {
    document.title = 'Changelog Page'

    // <img src={'images/cat.jpg'} alt=""/>
    // <img src={require('images/dog.jpg')} alt=""/>

    return (
        <div className={css.content}>
            <h1 className={css.title}>Changelog Page</h1>
            <p className={css.description}>
                Reference site about Lorem Ipsum, giving information on its origins.
            </p>
        </div>
    )
}

export default ChangelogPage
