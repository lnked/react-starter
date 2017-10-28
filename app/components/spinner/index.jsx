import React, { PureComponent } from 'react'
import css from './styles.scss'

export default class Spinner extends PureComponent {
    render () {
        return (
            <div className={css.spinner} />
        )
    }
}
