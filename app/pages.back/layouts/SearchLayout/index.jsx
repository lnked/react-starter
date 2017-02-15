import React, { Component } from 'react';

export default class SearchLayout extends Component {
    render () {
        return (
            <div className="search">
                <header className="search-header">
                    [Search Title]
                </header>
                <div className="search-results">
                    {this.props.children}
                </div>
                <footer className="search-footer">
                    [Total Results]
                </footer>
            </div>
        );
    }
}

SearchLayout.propTypes = {
    children: React.PropTypes.object
};
