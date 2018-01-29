import React, { PureComponent } from 'react'
import css from './styles.scss'

import {
  NavLink,
} from 'react-router-dom'


export default class Logo extends PureComponent {
  render() {
    return (
      <NavLink to="/" className={css.logo}>
        <span className={css.image} />
        <span className={css.title}>React Starter</span>
      </NavLink>
    )
  }
}
