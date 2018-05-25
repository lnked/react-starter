import React from 'react'

export const HOC = (Component) => {
    return class extends React.Component {
        render () {
            return <Component {...this.props} />
        }
    }
}
