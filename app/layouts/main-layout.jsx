import React, { Component } from 'react';
import { Link } from 'react-router';

export default class MainLayout extends Component {
    render () {
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
                <main>
                    {this.props.children}
                </main>
            </div>
        );
    }
}

MainLayout.propTypes = {
    children: React.PropTypes.object
};

MainLayout.defaultProps = {
    children: 'Default value'
};
