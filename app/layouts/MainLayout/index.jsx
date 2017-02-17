import React, { Component } from 'react';
import { render } from 'react-dom';
import { Link } from 'react-router';

export default class MainLayout extends Component {

    static propTypes = {
        children: React.PropTypes.object.isRequired,
        title: React.PropTypes.string
    }

    static defaultProps = {
        title: 'Your Title'
    }

    render() {
        return (
            <div className="app">
                <header className="primary-header">
                    <h1>Main Layout</h1>
                </header>

                <aside className="primary-aside">
                    <ul>
                        <li><Link to="/" activeClassName="active">Home</Link></li>
                        <li><Link to="/page" activeClassName="active">Page</Link></li>
                        <li><Link to="/main" activeClassName="active">Main</Link></li>
                        <li><Link to="/users" activeClassName="active">Users</Link></li>
                        <li><Link to="/widgets" activeClassName="active">Widgets</Link></li>
                    </ul>
                </aside>

                <main>
                    {this.props.children}
                </main>
            </div>
        )
    }
}
