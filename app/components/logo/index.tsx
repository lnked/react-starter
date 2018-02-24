import * as React from 'react'
import * as css from './styles'

import { NavLink } from 'react-router-dom'

export default class Logo extends React.PureComponent<{}, {}> {
    render () {
        return (
            <NavLink to="/" className={css.logo}>
                <span className={css.image} />
                <span className={css.title}>React Starter</span>
            </NavLink>
        )
    }
}
