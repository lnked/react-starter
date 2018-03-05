import * as React from 'react'
import * as css from './styles.scss'

interface T {
    bullet: boolean;
}

export default class Notify extends React.Component<T, {}> {
    static defaultProps = {
        bullet: false
    }

    renderBullet = () => {
        if (this.props.bullet) {
            return (
                <div className={css.bullet} />
            )
        }
    }

    render () {
        return (
            <div className={css.notify}>
                { this.renderBullet() }
            </div>
        )
    }
}
