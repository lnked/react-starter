import * as React from 'react'

export interface P {
    name: string;
    checked?: boolean | string | number;
    children?: React.ReactChild;
    handleChange?: (value: number | string | boolean) => void | boolean;
}

export interface S {
    checked: boolean | string | number;
}

export default class RadioGroup extends React.Component<P, S> {
    static defaultProps = {
        checked: false,
        handleChange: (value) => {
            console.log('check radio: = ', value)
        }
    }

    state = {
        checked: this.props.checked || false
    }

    handleChange = checked =>
        this.setState({ checked })

    render () {
        const { checked } = this.state
        const { name, children } = this.props

        /* tslint:disable */
        /* eslint-disable */
        const items: any = React.Children.map(children, (radio: any) => (
            React.cloneElement(radio, {
                name,
                checked: checked && (checked == radio.props.value),
                handleChange: this.handleChange
            })
        ))

        return <React.Fragment>{items}</React.Fragment>
    }
}
