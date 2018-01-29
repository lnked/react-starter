import React, { PureComponent } from 'react'
import { oneOfType, object, string, array } from 'prop-types'
import css from './styles.scss'


export default class Layout extends PureComponent {
    static propTypes = {
      className: string,
      children: oneOfType([
        array,
        string,
        object,
      ]),
    }

    static defaultProps = {
      className: '',
      children: '',
    }

    render() {
      return (
        <div className={`${css.layout} ${this.props.className}`}>
          {this.props.children}
        </div>
      )
    }
}
