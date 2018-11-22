import * as React from 'react'
import * as css from './styles.scss'

export function Loader () {

    return (
        <div className={css.preloader}>
            <span className={css.preloader__bullet} />
            <span className={css.preloader__bullet} />
            <span className={css.preloader__bullet} />
        </div>
    )

}
