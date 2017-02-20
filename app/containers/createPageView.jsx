import React, { Component } from 'react';
import Button from 'components/button';

export default class CreatePageView extends Component {

    static propTypes = {
        params: React.PropTypes.shape({
            slug: React.PropTypes.string.isRequired
        })
    }

    render () {
        return(
            <div>
                <h1>Create Post: {this.props.params.slug}</h1>
                <Button label="test" type="button" />
                <Button label="test" type="button" mod="dark" />
                <Button label="test" type="button" mod="link" />
            </div>
        );
    }
}
