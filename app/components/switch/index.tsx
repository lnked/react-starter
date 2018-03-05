import * as React from 'react'
import * as css from './styles.scss'

interface T {
    name: string;
    round: boolean;
    checked: boolean;
}

interface S {
    checked: boolean;
}

export default class Switch extends React.Component<T, S> {
    static defaultProps = {
        name: '',
        round: false,
        checked: false
    }

    state = {
        checked: this.props.checked
    }

    handleChange = () => {
        this.setState({ checked: !this.state.checked })
    }

    render () {
        const cn: any = []
        const { name, round } = this.props
        const { checked } = this.state

        const id = `switch_${name}`

        cn.push(css.slider)

        if (round) {
            cn.push(css.round)
        }

        const props: any = {
            id,
            type: 'checkbox',
            name,
            checked,
            className: css.input,
            onChange: this.handleChange
        }

        return (
            <label className={css.change} htmlFor={id}>
                <input {...props} />
                <span className={cn.join(' ')} />
            </label>
        )
    }
}
