import * as React from 'react'
import { getDisplayName } from 'helpers/handlers'

export const ppHOC = WrappedComponent => {
    return class PP extends React.Component {
        static displayName = `HOC(${getDisplayName(WrappedComponent)})`

        state = {
            name: '',
        }

        onNameChange = e => {
            this.setState({
                name: e.target.value,
            })
        }

        additions = () => {
            return {
                name: {
                    value: this.state.name,
                    onChange: this.onNameChange,
                },
            }
        }

        render () {
            return <WrappedComponent {...this.props} {...this.additions()} />
        }
    }
}

// @ppHOC
// class Example extends React.Component {
//     render() {
//         return <input name="name" {...this.props.name} />
//     }
// }
