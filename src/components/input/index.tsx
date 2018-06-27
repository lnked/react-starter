import * as React from 'react'

interface S {
    value: string;
}

export class Input extends React.Component<{}, S> {
    state = {
        value: ''
    }

    handleChange = (e: any) => {
        const value = e.target.value

        this.setState({
            value
        })
    }

    render () {
        const { value } = this.state

        return (
            <div>
                <p>value: {value}</p>
                <input value={value} onChange={this.handleChange} />
            </div>
        )
    }
}
