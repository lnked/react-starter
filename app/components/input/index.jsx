import React, { Component } from 'react'
import css from './styles.scss'

export default class Button extends Component {

    static propTypes = {
        type: React.PropTypes.string,
        name: React.PropTypes.string,
        value: React.PropTypes.string,
        className: React.PropTypes.string,
        handleChange: React.PropTypes.func
    }

    static defaultProps = {
        type: 'text',
        value: '',
        className: '',
        handleChange: null
    }

    render () {
        console.log(this.props)
        return (
            <input
                type={this.props.type}
                name={this.props.name}
                value={this.props.value}
                onChange={this.props.handleChange}
                className={[css.input, this.props.className].join(' ')}
            />
        )
    }
}


class Input extends React.Component {
  constructor(props) {
    super(props);
    this.id = getNextId();
    
    this.onChange = this.onChange.bind(this);
  }
  
  onChange(e) {
    this.props.onChange(e.target.value);
  }
  
  render() {
    return (
      <label htmlFor={this.id}>
        {this.props.label}
        
        <input
          id={this.id}
          value={this.props.value} 
          onChange={this.onChange}
          />
      </label>
    );
  }
}