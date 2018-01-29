import React, { PureComponent } from 'react'
import { string } from 'prop-types'
import css from './styles.scss'


export default class Prompt extends PureComponent {
    static propTypes = {
      title: string,
    }

    static defaultProps = {
      title: '',
    }

    render() {
      return (
        <div className={css.badge}>{ this.props.title }</div>
      )
    }
}
