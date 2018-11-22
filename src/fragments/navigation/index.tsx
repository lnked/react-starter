import * as React from 'react'
import * as css from './styles.scss'

import { NavLink } from 'react-router-dom'

export function Navigation () {

  return (
    <nav className={css.navigation}>
      <div className={css.group}>
        <NavLink to="/" exact className={css.link} activeClassName={css.active}>
                    Main page
        </NavLink>

        <NavLink to="/ru/example" className={css.link} activeClassName={css.active}>
                    Example page
        </NavLink>

        <NavLink to="/ru/panels" className={css.link} activeClassName={css.active}>
                    Panels page
        </NavLink>
      </div>

      <a
        href="https://github.com/lnked/react-starter"
        target="_blank"
        className={css.codeLink}
        rel="noopener noreferrer"
      >
                Source Code
      </a>
    </nav>
  )

}
