// class BigPhoto extends React.Component {
//     state = {
//         isLoading: false,
//     }

//     componentDidMount() {
//         this.loadImage(this.props.url)
//     }

//     loadImage = src => {
//         this.setState({ isLoading: true })

//         let img = new Image()
//         img.onload = () => {
//             this.setState({ isLoading: false })
//         }

//         img.src = src
//     }

//     render() {
//         const { isLoading } = this.state
//         const { url } = this.props
//         return isLoading ? <p>Загружаю...</p> : <img src={url} alt="big vk" />
//     }
// }
