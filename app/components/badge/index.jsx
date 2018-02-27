import * as React from 'react'
import * as PropTypes from 'prop-types'

import * as css from './styles'

export default class Badge extends React.PureComponent<{}, {}> {
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
        className: string,
        children: oneOfType([
            string,
            object
        ])
    }

    static defaultProps = {
        title: '',
        bolded: false,
        className: '',
        variant: 'default'
    }

    render () {
        const cn = []

        const { title, children, variant, bolded, className } : {
            title: string,
            bolded: boolean,
            variant: string,
            children: any,
            className: string
        } = this.props

        cn.push(css.badge)
        cn.push(`${css[`${variant}`]}`)

        if (className) {
            cn.push(className)
        }

        if (bolded) {
            cn.push(css.bold)
        }

        return (
            <div className={cn.join(' ')}>{ title || children }</div>
        )
    }
}
