import Input from 'react-toolbox/lib/input';

class InputTest extends React.Component {
  state = { name: '', phone: '', email: '', hint: '' };

  handleChange = (name, value) => {
    this.setState({...this.state, [name]: value});
  };

  render () {
    return (
      <section>
        <Input type='text' label='Name' name='name' value={this.state.name} onChange={this.handleChange.bind(this, 'name')} maxLength={16 } />
        <Input type='text' label='Disabled field' disabled />
        <Input type='email' label='Email address' icon='email' value={this.state.email} onChange={this.handleChange.bind(this, 'email')} />
        <Input type='tel' label='Phone' name='phone' icon='phone' value={this.state.phone} onChange={this.handleChange.bind(this, 'phone')} />
        <Input type='text' value={this.state.hint} label='Required Field' hint='With Hint' required onChange={this.handleChange.bind(this, 'hint')} icon={<span>J</span>} />
      </section>
    );
  }
}

class CustomTextInput extends React.Component {
  constructor(props) {
    super(props);
    this.focus = this.focus.bind(this);
  }

  focus() {
    // Explicitly focus the text input using the raw DOM API
    this.textInput.focus();
  }

  render() {
    // Use the `ref` callback to store a reference to the text input DOM
    // element in an instance field (for example, this.textInput).
    return (
      <div>
        <input
          type="text"
          ref={(input) => { this.textInput = input; }} />
        <input
          type="button"
          value="Focus the text input"
          onClick={this.focus}
        />
      </div>
    );
  }
}
