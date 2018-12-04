import * as React from 'react'
import * as css from './styles.scss'

import { NavLink } from 'react-router-dom'

export interface P {
  link: string
}

export class Logo extends React.PureComponent<P, {}> {

  static defaultProps = {
    link: '/',
  }

  render () {
    const { link } = this.props

    return (
      <NavLink to={link} className={css.logo}>
        <span className={css.image} />
        <span className={css.title}>React Starter</span>
      </NavLink>
    )
  }

}
