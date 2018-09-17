// import * as React from 'react'

// const validate = (id, value) => !value.length && 'required'

// export default class FormSimpleWithValidation extends React.Component {
//     state = {
//         touched: {},
//         errors: {},
//     }

//     values = {
//         email: '',
//         password: '',
//     }

//     handleFocus = e => {
//         this.setState({ touched: { ...this.state.touched, [e.target.id]: true } })
//     }

//     handleBlur = e => {
//         const { id, value } = e.target
//         this.setState({
//             errors: {
//                 ...this.state.errors,
//                 [id]: validate(id, value),
//             },
//         })
//     }

//     handleChange = e => {
//         const { id, value } = e.target
//         this.values[id] = value
//     }

//     handleSubmit = e => {
//         e.preventDefault()
//         const errors = Object.keys(this.values).reduce((acc, key) => {
//             const error = validate(key, this.values[key])
//             return error ? { ...acc, [key]: error } : acc
//         }, {})

//         if (!Object.keys(errors).length) {
//             alert('SUCCESS: ' + JSON.stringify(this.values))
//         } else {
//             this.setState({
//                 errors,
//                 touched: Object.keys(this.values).reduce((acc, key) => ({ ...acc, [key]: true }), {}),
//             })
//         }
//     }

//     render() {
//         const { touched, errors } = this.state

//         return (
//             <form onChange={this.handleChange} onSubmit={this.handleSubmit}>
//                 <input id="email" type="email" onFocus={this.handleFocus} onBlur={this.handleBlur} />
//                 <br />
//                 <label htmlFor="email">{touched.email ? errors.email : ''}</label>
//                 <br />
//                 <input id="password" type="password" onFocus={this.handleFocus} onBlur={this.handleBlur} />
//                 <br />
//                 <label htmlFor="password">{touched.password ? errors.password : ''}</label>
//                 <br />
//                 <button type="submite">Submite</button>
//             </form>
//         )
//     }
// }
