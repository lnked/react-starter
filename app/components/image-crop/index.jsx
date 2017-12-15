import React, { Component } from 'react'
import { string } from 'prop-types'

// http://lapanoid.github.io/redux-cropper/
// https://goshakkk.name/pabla/
// http://dropsofserenity.github.io/react-avatar-cropper/
// http://roadmanfong.github.io/react-cropper/example/

import { classNames } from 'classnames'

const btnClass = classNames({
    btn: true,
    'btn-pressed': true,
    'btn-over': true
})

console.log(btnClass)

// var arr = ['b', { c: true, d: false }];
// classNames('a', arr); // => 'a b c'

// let buttonType = 'primary';
// classNames({ [`btn-${buttonType}`]: true });

// classNames('foo', 'bar'); // => 'foo bar'

// classNames('foo', 'bar'); // => 'foo bar'
// classNames('foo', { bar: true }); // => 'foo bar'
// classNames({ 'foo-bar': true }); // => 'foo-bar'
// classNames({ 'foo-bar': false }); // => ''
// classNames({ foo: true }, { bar: true }); // => 'foo bar'
// classNames({ foo: true, bar: true }); // => 'foo bar'

// // lots of arguments of various types
// classNames('foo', { bar: true, duck: false }, 'baz', { quux: true }); // => 'foo bar baz quux'

// // other falsy values are just ignored
// classNames(null, false, 'bar', undefined, 0, 1, { baz: null }, ''); // => 'bar 1'

export default class imageCrop extends Component {
    static propTypes = {
        name: string
    }

    state = {
        test: ''
    }

    componentWillMount () {

    }

    componentDidMount () {

    }

    componentWillReceiveProps (nextProps) {

    }

    shouldComponentUpdate (nextProps, nextState) {

    }

    componentWillUpdate (nextProps, nextState) {

    }

    componentDidUpdate (prevProps, prevState) {

    }

    componentWillUnmount () {

    }

    render () {
        return (
            <div>
                Crop Image
            </div>
        )
    }
}
