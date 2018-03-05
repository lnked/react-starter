import * as React from 'react'
import * as css from './styles.scss'

export default class Loader extends React.PureComponent<{}, {}> {
    render () {
        return (
            <div className={css.preloader}>
                <span className={css.preloader__bullet} />
                <span className={css.preloader__bullet} />
                <span className={css.preloader__bullet} />
            </div>
        )
    }
}
