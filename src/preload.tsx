// import * as React from 'react'

// export default class FeedbackButton extends React.Component {
//     handleButtonClick () {
//         // ↓ Here, import() will make webpack split FeedbackModal
//         // into a separate file
//         // and download it only when import() is called
//         import('../FeedbackModal/').then(module => {
//             this.setState({ FeedbackModal: module.default })
//         })
//     }

//     render () {
//         const { FeedbackModal }= this.state

//         return (
//             <React.Fragment>
//                 <button onClick={this.handleButtonClick}>
//                     Provide feedback!
//                 </button>
//                 {FeedbackModal && <FeedbackModal />}
//             </React.Fragment>
//         )
//     }
// }
