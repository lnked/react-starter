import * as React from 'react'
import * as css from './styles.scss'

import src from './assets/image.jpg'

export function MainPage () {
    document.title = 'Main Page'

    return (
        <div className={css.content}>
            {/*
            <Title type="secondary" center>Main Page</Title>
            <Title size="small" type="primary" center>Main Page</Title>
            <Title size="medium" type="secondary" center>Main Page</Title>
            */}

            <p className={css.description}>
                Reference site about Lorem Ipsum, giving information on its origins.
            </p>

            <div className={css.group}>
                <div className={css.image} />
                <img src={src} alt="" />
            </div>
        </div>
    )
}

export default MainPage
