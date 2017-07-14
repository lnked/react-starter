import React, { Component } from 'react'
import { string } from 'prop-types'

// http://lapanoid.github.io/redux-cropper/
// https://goshakkk.name/pabla/
// http://dropsofserenity.github.io/react-avatar-cropper/
// http://roadmanfong.github.io/react-cropper/example/

export default class imageCrop extends Component {
    static propTypes = {
        name: string
    }

    constructor (props) {
        super(props)

        this.state = {
            test: ''
        }
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
