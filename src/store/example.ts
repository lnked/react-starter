import {observable, autorun, action} from 'mobx'

const person = observable({
    // observable properties:
    name: 'John',
    age: 42,
    showAge: false,

    // computed property:
    get labelText () {
        return this.showAge ? `${this.name} (age: ${this.age})` : this.name
    },

    setAge (age) {
        this.age = age
    }
}, {
    setAge: action
})

// object properties don't expose an 'observe' method,
// but don't worry, 'mobx.autorun' is even more powerful
autorun(() => console.log(person.labelText))

person.name = 'Dave'
// prints: 'Dave'

person.setAge(21)
// etc
