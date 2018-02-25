import React, { PureComponent } from 'react'
import * as css from './styles'

export default class Spinner extends React.PureComponent<{}, {}> {
    render () {
        return (
            <div className={css.spinner} />
        )
    }
}
