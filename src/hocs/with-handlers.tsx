// import * as React from 'react'

// function withHandlers(WrappedComponent, selectData) {
//     return class extends React.Component {
//         constructor(props) {
//             super(props)
//             this.handleChange = this.handleChange.bind(this)
//             this.state = {
//                 data: selectData(DataSource, props)
//             }
//         }

//         componentDidMount() {
//             DataSource.addChangeListener(this.handleChange)
//         }

//         componentWillUnmount() {
//             DataSource.removeChangeListener(this.handleChange)
//         }

//         handleChange() {
//             this.setState({
//                 data: selectData(DataSource, this.props)
//             })
//         }

//         render() {
//             // ... and renders the wrapped component with the fresh data!
//             // Notice that we pass through any additional props
//             return <WrappedComponent data={this.state.data} {...this.props} />
//         }
//     }
// }
