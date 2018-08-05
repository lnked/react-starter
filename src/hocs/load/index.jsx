export const fetchData = (dataDepsFn) => (Component) =>
    class extends React.Component {
    // State relating to data fetching
    state = {
        isLoading: true,
        data: {},
    }

    componentDidMount () {
        // Create request metadata object
        const dataDeps = dataDepsFn(this.props)
        // Collect array of promises, one for each api request
        const promises = Object.keys(dataDeps)
            .map(key => fetch(dataDeps[key], key))

        const mergeData = (obj, data) => ({ ...obj, ...data })

        // When all requests have resolved
        // Set 'data' and 'isLoading = false', causing re-render
        Promise.all(promises)
            .then(data => data.reduce(mergeData, {}))
            .then(dataObj => this.setState({
                data: dataObj,
                isLoading: false,
            }))
    }

    render () {
        const { isLoading, data } = this.state
        return isLoading
            ? <Loader />
            : <Component {...this.props} {...data} />
    }
    }
