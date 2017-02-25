// import css from './styles.scss'
// import React, { Component } from 'react'
// import { Link } from 'react-router'
// import axios from 'axios'

// const HomeListing = React.createClass({
//   /* One option is to pull data from, and save data to,
//     a json url for testing. On a larger scale,
//     this React output would be part of a larger app
//     where the data is saved in a database as part of
//     an MVC, where React is the View in the
//     Model-View-Controller
//   */
//     loadHomesFromServer () {
//     // We're going to hard-code this information for testing purposes.
//         const homes = [
//             {
//                 address: '12345 Beverly Dr',
//                 description: 'This is a home in the city',
//                 photo: 'assets/images/home.jpg',
//                 saves: 52,
//                 saved: false
//             },
//             {
//                 address: '98765 Tweety Ln',
//                 description: 'This is a home in the suburbs',
//                 photo: 'assets/images/home.jpg',
//                 saves: 123,
//                 saved: true
//             },
//             {
//                 address: '1 Small St.',
//                 description: 'This is a nice little country home',
//                 photo: 'assets/images/home.jpg',
//                 saves: 189,
//                 saved: false
//             }
//         ]
//         this.setState({homes})
//     },
//     loadSavesFromServer () {
//     // Again, we hard-code for testing
//         const saves = [
//             {
//                 saves: 52,
//                 saved: false
//             },
//             {
//                 saves: 123,
//                 saved: true
//             },
//             {
//                 saves: 189,
//                 saved: false
//             }
//         ]
//         this.setState({saves})
//     },
//     toggleSave (index) {
//         const saves = this.state.saves

//         if (saves[index].saved) {
//             saves[index].saves--
//             saves[index].saved = false
//         } else {
//             saves[index].saves++
//             saves[index].saved = true
//         }
//         this.setState({
//             saves
//         })

//     // This is where we would save the information if this were part of a larger app
//         return saves[index].saved
//     },
//     getInitialState () {
//         const saves = []
//         const homes = []

//         return {
//             saves,
//             homes
//         }
//     },
//     componentDidMount () {
//         this.loadHomesFromServer()
//         this.loadSavesFromServer()
//     // If we were updating the saves, we could continuously poll the server,
//     // and update the Saves information when something changes
//     // setInterval(this.loadSavesFromServer, this.props.pollInterval);
//     },
//     render () {
//     // We need to set these variables (including the toggleSave function)
//     // so they can be used within the map function below. Otherwise, they
//     // would be outside the function's scope
//         const saves = this.state.saves
//         const toggleSave = this.toggleSave

//         const homeNodes = this.state.homes.map((home, index) => {
//             if (typeof (saves[index]) === 'undefined') {
//                 saves[index] = {saves: 0}
//             }
//       // the key is React-specific, and is especially important when
//       // components can be shuffled or removed. it is NOT available
//       // as a prop, so we need a separate id for that.
//             return (
//         <Home
//           key={index}
//           id={index}
//           onToggleSave={toggleSave}
//           isSaved={saves[index].saved}
//           photo={home.photo}
//           address={home.address}
//           numSaves={saves[index].saves}
//         >
//           {home.description}
//         </Home>
//             )
//         })
//         return (
//       <div className="homeList">
//         {homeNodes}
//       </div>
//         )
//     }
// })

// const Home = React.createClass({
//     toggleSave (index) {
//     // We have to do a second pass to the top level parent,
//     // since that is where the entire list resides.
//         return this.props.onToggleSave(index)
//     },
//     render () {
//         return (
//       <div className="home">
//         <span className="homeAddress">
//           {this.props.address}
//         </span>
//         <Photo src={this.props.photo} />
//         <span className="homeDescription">
//           {this.props.children}
//         </span>
//         <Saves
//           id={this.props.id}
//           handleSave={this.toggleSave}
//           isSaved={this.props.isSaved}
//           numSaves={this.props.numSaves}
//          />
//       </div>
//         )
//     }
// })

// const Photo = React.createClass({
//     render () {
//         return (
//       <div className="homePhoto">
//         <img src={this.props.src} />
//       </div>
//         )
//     }
// })

// const Saves = React.createClass({
//     handleSubmit (e) {
//     // We prevent the default action of submitting the form
//     // so we can stay on the page
//         e.preventDefault()

//     // We have to pass this up to the parent
//         const isSaved = this.props.handleSave(this.props.id)
//     },
//     render () {
//         let savedText = ''
//         let submitText = 'Save'
//         if (this.props.isSaved) {
//             savedText = 'You have saved this home.'
//             submitText = 'Remove'
//         }

//         return (
//       <div className="saves">
//         <form onSubmit={this.handleSubmit}>
//           <input type="submit" value={submitText} />
//         </form>
//       {this.props.numSaves} saves. {savedText}
//       </div>
//         )
//     }
// })

// React.render(
//   <HomeListing url="homes.json" savesUrl="saves.json" pollInterval={10000} />,
//   document.getElementById('content')
// )
