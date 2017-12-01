import React, { PureComponent } from 'react'
import { oneOf, oneOfType, string, object, bool } from 'prop-types'
import css from './styles.scss'

export default class Badge extends PureComponent {
    static propTypes = {
        title: string,
        bolded: bool,
        variant: oneOf([
            'info',
            'default',
            'primary',
            'success',
            'warning',
            'danger'
        ]),
        children: oneOfType([
            string,
            object
        ])
    }

    static defaultProps = {
        title: ''
    }

    render () {
        const { title, children } : { title: string, children: any } = this.props

        return (
            <div className={css.badge}>{ title || children }</div>
        )
    }
}
