import React from 'react';
import ReactDOM from 'react-dom';
import Cleave from 'cleave.js/react';

const country = 'ru';

require('cleave.js/dist/addons/cleave-phone.{country}');

require(['cleave.js/dist/cleave.min', 'cleave.js/dist/addons/cleave-phone.{country}'], function (Cleave) {
    var cleave = new Cleave(...)
});

class MyComponent extends React.Component {
    onChange(event) {
        // formatted pretty value
        console.log(event.target.value);

        // raw value
        console.log(event.target.rawValue);
    }

    render() {
        return (
        <Cleave placeholder="Enter your credit card number"
                options={{creditCard: true}}
                onChange={this.onChange.bind(this)} />
        );
    }
}

class MyComponent extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.onCreditCardChange = this.onCreditCardChange.bind(this);
        this.onCreditCardFocus = this.onCreditCardFocus.bind(this);
    }

    onCreditCardChange(event) {
        // formatted pretty value
        console.log(event.target.value);

        // raw value
        console.log(event.target.rawValue);
    }

    onCreditCardFocus(event) {
        // update some state
    }

    render() {
        return (
            <Cleave placeholder="Enter your credit card number"
                options={{creditCard: true}}
                onFocus={this.onCreditCardFocus}
                onChange={this.onCreditCardChange} />
        );
    }
}


class MyComponent extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            creditCardType:     '',
            creditCardRawValue: '',
            phoneRawValue:      '',
            dateRawValue:       '',
            numeralRawValue:    '',
            customRawValue:     ''
        };
        
        this.onCreditCardChange = this.onCreditCardChange.bind(this);
        this.onCreditCardTypeChanged = this.onCreditCardTypeChanged.bind(this);
        this.onPhoneChange = this.onPhoneChange.bind(this);
        this.onDateChange = this.onDateChange.bind(this);
        this.onNumeralChange = this.onNumeralChange.bind(this);
        this.onCustomChange = this.onCustomChange.bind(this);
    }

    onCreditCardChange(event) {
        this.setState({creditCardRawValue: event.target.rawValue});
    }

    onPhoneChange(event) {
        this.setState({phoneRawValue: event.target.rawValue});
    }

    onDateChange(event) {
        this.setState({dateRawValue: event.target.rawValue});
    }

    onNumeralChange(event) {
        this.setState({numeralRawValue: event.target.rawValue});
    }

    onCustomChange(event) {
        this.setState({customRawValue: event.target.rawValue});
    }

    onCreditCardTypeChanged(type){
        this.setState({creditCardType: type});
    }

    render() {
        return (
            <div>
                <Cleave placeholder="Enter credit card number" options={{creditCard: true, onCreditCardTypeChanged: this.onCreditCardTypeChanged}}
                        onChange={this.onCreditCardChange}/>

                <Cleave placeholder="Enter phone number" options={{phone: true, phoneRegionCode: 'AU'}}
                        onChange={this.onPhoneChange}/>

                <Cleave placeholder="Enter date" options={{date: true, datePattern: ['Y', 'm', 'd']}}
                        onChange={this.onDateChange}/>

                <Cleave className="input-numeral" placeholder="Enter numeral" options={{numeral: true, numeralThousandsGroupStyle: 'thousand'}}
                        onChange={this.onNumeralChange}/>

                <Cleave placeholder="Custom delimiter / blocks" options={{blocks: [4,3,3], delimiter: '-', numericOnly: true}}
                        onChange={this.onCustomChange}/>

                <div className="raw-values">
                    <p>credit card: {this.state.creditCardRawValue}</p>
                    <p>credit card type: {this.state.creditCardType}</p>
                    <p>phone: {this.state.phoneRawValue}</p>
                    <p>date: {this.state.dateRawValue}</p>
                    <p>numeral: {this.state.numeralRawValue}</p>
                    <p>custom: {this.state.customRawValue}</p>
                </div>
            </div>
        );
    }
}

ReactDOM.render(<MyComponent/>, document.getElementById('content'));
