import React, { Component } from 'react';
import { Link } from 'react-router';
import Form from 'components/form/index';

export default class MainLayout extends Component {

    static propTypes = {
        children: React.PropTypes.object.isRequired,
        model: React.PropTypes.object.isRequired,
        title: React.PropTypes.string
    }

    static defaultProps = {
        title: 'Your Title',
        model: {
            id: 0
        }
    }

    state = { expanded: false }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.model.save();
    }

    handleNameChange = (e) => {
        this.props.model.name = e.target.value;
    }

    handleExpand = (e) => {
        e.preventDefault();
        this.setState({ expanded: !this.state.expanded });
    }

    render () {
        const {
            model,
            title
        } = this.props;

        return (
            <div className="app">
                <header className="primary-header">
                    Header
                </header>

                <aside className="primary-aside">
                    <ul>
                        <li><Link to="/" activeClassName="active">Home</Link></li>
                        <li><Link to="/users" activeClassName="active">Users</Link></li>
                        <li><Link to="/widgets" activeClassName="active">Widgets</Link></li>
                    </ul>
                </aside>

                <Form onSubmit={this.handleSubmit} expanded={this.state.expanded} onExpand={this.handleExpand}>
                    <div>
                        <h1>{title}</h1>
                        <input type="text" value={model.name} onChange={this.handleChange} placeholder="Your Name"/>
                    </div>
                </Form>

                <main>
                    {this.props.children}
                </main>
            </div>
        );
    }
}
