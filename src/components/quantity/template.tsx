import * as React from 'react'
import * as css from './styles.scss'
import { сlasses } from 'helpers'

interface P {
    value: string;
}

const cx = сlasses.bind(css)

export class Template extends React.Component<P, {}> {
    render () {
        const { value } = this.props

        return (
            <div className={cx({})}>
                <p>value: {value}</p>
            </div>
        )
    }
}
