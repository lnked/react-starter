import * as React from 'react'
import * as css from './styles.scss'

import { classes } from 'helpers'

import { Header } from 'fragments'

export interface P {
  children?: JSX.Element[] | JSX.Element | string;
}

export interface S {
  title: string;
}

const cx = classes.bind(css)

export class CoreLayout extends React.Component<P, S> {

  static defaultProps = {
    children: '',
  }

  state = {
    title: 'React Starter App',
  }

  componentDidMount () {

    this.fixScroll()

  }

  componentDidUpdate () {

    this.fixScroll()

  }

  fixScroll = () => window.scrollTo(0, 0)

  render () {

    const { children } = this.props

    return (
      <div className={cx({ layout: true })}>
        <Header />

        <section className={cx({ main: true })}>{children}</section>
      </div>
    )

  }

}

export default CoreLayout
