// import css from './styles.scss'
// import React, { Component } from 'react'
// import { Link } from 'react-router'
// import axios from 'axios'

// export default class Load extends Component {

// }

// const Saves = React.createClass({
//     getInitialState () {
//         return {
//             saved: false,
//             numSaves: 0
//         }
//     },
//     handleSubmit (e) {
//         e.preventDefault()

//         let saved = false
//         let numSaves = this.state.numSaves

//         if (this.state.saved === false) {
//             saved = true
//             numSaves++
//         } else {
//             numSaves--
//         }
//         this.setState({
//             numSaves,
//             saved
//         })
//     },
//     render () {
//         let savedText = ''
//         let submitText = 'Save'
//         if (this.state.saved) {
//             savedText = 'You have saved this home.'
//             submitText = 'Remove'
//         }

//         return (
//       <div className="saves">
//         <form onSubmit={this.handleSubmit}>
//           <input type="submit" value={submitText} />
//         </form>
//       {this.state.numSaves} saves. {savedText}
//       </div>
//         )
//     }
// })
