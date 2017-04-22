import React, { Component } from 'react'
import PropTypes from 'prop-types'
import css from './styles.scss'

export default class Input extends Component {

    static propTypes = {
        type: PropTypes.string,
        name: PropTypes.string,
        value: PropTypes.string,
        className: PropTypes.string,
        handleChange: PropTypes.func
    }

    static defaultProps = {
        type: 'text',
        value: '',
        className: '',
        handleChange: null
    }

    static defaultProps: Props = {
        value: ''
    }

    handleChange = event => 
       this.props.onChange(event.nativeEvent.target.value);

    render () {
        console.log(this.props)
        return (
            <input
                type={this.props.type}
                name={this.props.name}
                value={this.props.value}
                onChange={this.handleChange}
                className={[css.input, this.props.className].join(' ')}
            />
        )
    }
}

// class Input extends React.Component {
//     constructor (props) {
//         super(props)
//         this.id = getNextId()

//         this.onChange = this.onChange.bind(this)
//     }

//     onChange (e) {
//         this.props.onChange(e.target.value)
//     }

//     render () {
//         return (
//       <label htmlFor={this.id}>
//         {this.props.label}

//         <input
//           id={this.id}
//           value={this.props.value}
//           onChange={this.onChange}
//           />
//       </label>
//         )
//     }
// }
