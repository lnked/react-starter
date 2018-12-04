import * as React from 'react'
import * as css from './styles.scss'

import { classes } from 'helpers'

import { P } from './types'

const cx = classes.bind(css)

export function Group ({ type = 'grid', children = [], className = '' }: P) {
  let items: any = null

  const division = children && Object.keys(children).length % 4

  if (children && Object.keys(children).length) {
    items = React.Children.map(children, (card: any) =>
      React.cloneElement(<div>{card}</div>, {
        className: cx(css.item),
      })
    )
  }

  return (
    <div className={cx(css.layout, {
      exact: division !== 0,
      grid: type === 'grid',
      list: type === 'list',
    }, className)}>{items}</div>
  )
}
