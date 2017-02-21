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
                <Button label="test" type="button" mod="default" />
                <Button label="test" type="button" mod="primary" />
                <Button label="test" type="button" mod="success" />
                <Button label="test" type="button" mod="info" />
                <Button label="test" type="button" mod="warning" />
                <Button label="test" type="button" mod="danger" />
                <Button label="test" type="button" mod="link" />
            </div>
        );
    }
}
