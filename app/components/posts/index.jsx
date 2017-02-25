import React, { Component } from 'react';
import { Link } from 'react-router';
import css from './styles.scss';

export default class Posts extends Component {

    static propTypes = {
        data: React.PropTypes.object.isRequired,
        title: React.PropTypes.string.isRequired
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
                        <br />
                    </div>
                )}
                <Link to={post.url} target="_blank">{post.title}</Link>
                <p>{post.author_flair_text}</p>
            </li>
        );
    }

    render () {
        return (
            <div>
                <h1>{`/r/${this.props.title}`}</h1>
                <ul className={css.post}>
                    {this.props.data.map(this.createListItem)}
                </ul>
            </div>
        );
    }
}
