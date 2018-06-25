import * as React from 'react'
import * as css from './styles.scss'

export class Spinner extends React.PureComponent<{}, {}> {
    render () {
        return (
            <div className={css.spinner} />
        )
    }
}
