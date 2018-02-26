import * as React from 'react'
import * as css from './styles'

export default class Entities extends React.Component<{}, {}> {
    render () {
        return (
            <div className={css.layout}>
                <div className={css.sidebar}>
                    Entities!
                </div>

                <div className={css.content}>
                    Entities!
                </div>
            </div>
        )
    }
}
