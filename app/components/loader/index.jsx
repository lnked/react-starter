import React, { PureComponent } from 'react'
import css from './styles.scss'


export default class Loader extends PureComponent {
  render() {
    return (
      <div className={css.preloader}>
        <span className={css.preloader__bullet} />
        <span className={css.preloader__bullet} />
        <span className={css.preloader__bullet} />
      </div>
    )
  }
}
