import * as React from 'react'
import * as css from './styles.scss'

import { Classes } from 'helpers'

export interface P {
  location: {
    pathname: string
  };
}

const cx = Classes.bind(css)

const NoMatchPage = ({ location }: P) => {
  return (
    <div className={cx(css.error)}>
      <div className={cx(css.figure)}>
        <img src={require('images/logo.svg')} className={cx({ figureImage: true })} alt="Error: 4xx" />
      </div>

      <div className={cx({ content: true })}>
        <h1 className={cx({ title: true })}>Ошибка (4xx)</h1>
        <p className={cx({ description: true })}>
          Не удалось найти страницу <code>{location.pathname}</code>.
        </p>
      </div>
    </div>
  )
}

export { NoMatchPage }
export default NoMatchPage
