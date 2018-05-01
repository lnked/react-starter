// import * as React from 'react'

// enum Transport {
//     train,
//     bus,
//     bike,
//     car
// }

// let myTransport = Transport.bus
// console.log(myTransport)
// enum Students {
// Ann,
// Bob,
// John,
// Zed
// }

// console.log(Students['John']); // 2

// console.log(Students[3]); // Zed

// enum Tools {
//     hammer,
//     screwdriver,
//     saw = 100,
//     wrench
// }

//   console.log(Tools.wrench); // 101

// enum Sports {
// Soccer,
// Football,
// Basketball,
// }

// // ...

// // Later or in another file:
// enum Sports {
// Swimming = 3,
// Running,
// Hockey
// }

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
