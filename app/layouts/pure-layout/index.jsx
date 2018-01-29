import React, { PureComponent } from 'react'
import { oneOfType, object, string, array } from 'prop-types'
import css from './styles.scss'

import { SvgFixer } from 'utils'


export default class PureLayout extends PureComponent {
    static propTypes = {
      children: oneOfType([
        object,
        string,
        array,
      ]),
    }

    state = {
      title: 'React Starter App',
    }

    componentWillMount() {
      document.title = this.state.title
      window.prerenderReady = true
    }

    componentDidMount() {
      SvgFixer()
    }

    render() {
      return (
        <div className={css.layout}>
          { this.props.children }
        </div>
      )
    }
}
