
# React-starter

[![npm](https://img.shields.io/npm/v/npm.svg)](https://github.com/lnked/react-starter)
[![npm (scoped)](https://img.shields.io/npm/v/@cycle/core.svg)](https://github.com/lnked/react-starter)

---

[![GitHub followers](https://img.shields.io/github/followers/lnked.svg?style=social&label=Follow)](https://github.com/lnked/react-starter)
[![GitHub forks](https://img.shields.io/github/forks/lnked/react-starter.svg?style=social&label=Fork)](https://github.com/lnked/react-starter)
[![GitHub stars](https://img.shields.io/github/stars/lnked/react-starter.svg?style=social&label=Star)](https://github.com/lnked/react-starter)
[![GitHub issues](https://img.shields.io/github/issues/lnked/react-starter.svg)](https://github.com/lnked/react-starter)
[![GitHub closed issues](https://img.shields.io/github/issues-closed/lnked/react-starter.svg)](https://github.com/lnked/react-starter)
[![Github All Releases](https://img.shields.io/github/downloads/lnked/react-starter/total.svg)](https://github.com/lnked/react-starter)

---

[![Code Climate](https://codeclimate.com/github/lnked/react-starter/badges/gpa.svg)](https://codeclimate.com/github/lnked/react-starter)
[![Issue Count](https://codeclimate.com/github/lnked/react-starter/badges/issue_count.svg)](https://codeclimate.com/github/lnked/react-starter)
eclimate.com/github/lnked/react-starter)

React-starter a react web sterter kit.

## Installation

#### npm

```bash
npm install --save react-starter.js
```

## Features

- Credit card number formatting
- Phone number formatting (i18n js lib separated for each country to reduce size)
- Date formatting
- Numeral formatting
- Custom delimiter, prefix and blocks pattern
- CommonJS / AMD mode
- ReactJS component
- AngularJS directive (1.x)

**TL;DR** [the demo page](https://github.com/lnked/react-starter)


## ReactJS component usage

```js
import React from 'react'
import ReactDOM from 'react-dom'
```

Then in JSX:

```js
export default class MyComponent extends Component {

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
            <Cleave placeholder="" />
        )
    }
}
```

## Playground

- [Plain JSFiddle (Basic usage)](https://jsfiddle.net/)

## Documentation

- [ReactJS component usage](https://github.com/nosir/cleave.js/blob/master/doc/reactjs-component-usage.md)

## Run tasks

```bash
npm install
```

Build assets

```bash
npm run build
```

Run tests

```bash
npm run test
```

Lint

```bash
npm run lint
```

Publish (build, tests & lint)

```bash
npm run publish
```

## Todo
- [x] ReactJS component
- [ ] Unit tests for formatter

## Get in touch
- Bugs / Suggestions: [open an issue](https://github.com/lnked/react-starter/issues)

## Licence

React-starter is licensed under the [![license](https://img.shields.io/github/license/lnked/react-starter.svg)](https://github.com/lnked/react-starter/blob/fastest/LICENSE)

- Google [libphonenumber](https://github.com/googlei18n/libphonenumber) is included under its [MIT](https://opensource.org/licenses/MIT)
