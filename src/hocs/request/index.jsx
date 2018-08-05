import * as React from 'react'
import axios from 'axios'

export function RequestHOC (RComponent, apiUrl) {
    class RequestHOC extends React.Component {
        state = {
            data: [],
        }

        componentDidMount () {
            this.get()
        }

        get = () =>
            axios.get(apiUrl)
                .then(response => response.data)
                .then(data => this.setState({ data }))

        create = data =>
            axios.post(apiUrl, data)
                .then(response => response.data)
                .then(createdItem => {
                    const data = [...this.state.data, createdItem]

                    this.setState({ data })
                })

        update = id =>
            axios.patch(`${apiUrl}/${id}`)
                .then(response => response.data)
                .then(updatedItem => {
                    const data = this.state.data.map(item => {
                        if (item.id !== updatedItem.id) return item

                        return {
                            ...item,
                            ...updatedItem,
                        }
                    })

                    this.setState({ data })
                })

        remove = id =>
            axios.delete(`${apiUrl}/${id}`)
                .then(response => response.data)
                .then(() => {
                    const data = this.state.data.filter(item => item.id !== id)

                    this.setState({ data })
                })

        render () {
            return (
                <RComponent
                    data={this.state.data}
                    get={this.get}
                    create={this.create}
                    update={this.update}
                    remove={this.remove}
                    {...this.props}
                />
            )
        }
    }

    RequestHOC.displayName = `RequestHOC(${RComponent.displayName || RComponent.name || 'Component'})`

    return RequestHOC
}
