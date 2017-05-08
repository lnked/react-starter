import React, { Component } from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'

import { Posts } from 'segments'

export default class Load extends Component {

    static propTypes = {
        subreddit: PropTypes.string,
        posts: PropTypes.oneOfType([
            PropTypes.object,
            PropTypes.array
        ])
    }

    static defaultProps = {
        subreddit: 'reactjs'
    }

    constructor (props) {
        super(props)

        this.state = {
            posts: []
        }
    }

    componentDidMount () {
        this.handleRedditLoad(this.props.subreddit)
    }

    handleRedditLoad (type) {
        axios.get(`https://www.reddit.com/r/${type}.json`)
            .then((res) => {
                const posts = res.data.data.children.map((obj) => obj.data)
                this.setState({ posts })
            })
    }

    render () {
        return (
            <Posts data={this.state.posts} title={this.props.subreddit} />
        )
    }
}
