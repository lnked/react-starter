import * as React from 'react'

interface P {
    name: string;
    checked?: boolean | string | number;
    children?: JSX.Element[] | JSX.Element | string;
    handleChange?: (value: number | string | boolean) => void | boolean;
}

interface S {
    checked: boolean | string | number;
}

export class RadioGroup extends React.Component<P, S> {
    static defaultProps = {
        checked: false,
        handleChange: (value: string | number) => {
            console.log('check radio: = ', value)
        }
    }

    state = {
        checked: this.props.checked || false
    }

    handleChange = (checked: boolean | string | number) =>
        this.setState({ checked })

    render () {
        const { checked } = this.state
        const { name, children } = this.props

        const items: any = React.Children.map(children, (radio: any) => (
            React.cloneElement(radio, {
                name,
                checked: checked && (checked === radio.props.value),
                handleChange: this.handleChange
            })
        ))

        return <React.Fragment>{items}</React.Fragment>
    }
}
