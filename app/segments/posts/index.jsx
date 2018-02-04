import React, { Component } from 'react'
import { oneOfType, object, string, array } from 'prop-types'
import { Link } from 'react-router-dom'
import css from './styles.scss'

export default class Posts extends Component {
    static propTypes = {
        title: string.isRequired,
        data: oneOfType([
            object,
            array
        ])
    }

    static defaultProps = {
        data: [],
        title: 'no title'
    }

    createListItem (post) {
        return (
            <li className={css.post__item} key={post.id}>
                {['self', 'default'].indexOf(post.thumbnail) < 0 && (
                    <div>
                        <img src={post.thumbnail} alt="" />
                    </div>
                )}
                <Link to={post.url} target="_blank" rel="noopener">{post.title}</Link>
                <p>{post.author_flair_text}</p>
            </li>
        )
    }

    render () {
        const {
            title
        } = this.props

        return (
            <div className={css.posts}>
                <h1>{`/r/${title}`}</h1>
                <ul className={css.post}>
                    {this.props.data.map(this.createListItem)}
                </ul>
            </div>
        )
    }
}
