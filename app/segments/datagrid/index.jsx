import React, { Children, Component } from 'react';

class DatagridBody extends Component {
    shouldComponentUpdate(nextProps) {
        return (nextProps.ids !== this.props.ids
             || nextProps.data !== this.props.data);
    }

    render() {
        const { resource, ids, data, children } = this.props;
        return (
            <tbody>
                {ids.map(id => (
                    <tr key={id}>
                        {Children.map(children, (field, index) =>
                            <DatagridCell
                                record={data[id]}
                                key={`${id}-${index}`}
                                field={field}
                                resource={resource}
                             />
                        )}
                    </tr>
                ))}
            </tbody>
        );
    }
}

render() {
    const { 
        resource,
        children,
        ids,
        data,
        currentSort
    } = this.props;

    return (
        <table>
            <thead>
                <tr>
                    {React.Children.map(children, (field, index) =>
                        <DatagridHeaderCell
                            key={index}
                            field={field}
                            currentSort={currentSort}
                            updateSort={this.updateSort}
                        />
                    )}
                </tr>
            </thead>
            <DatagridBody resource={resource} ids={ids} data={data}>
                {children}
            </DatagridBody>
            </table>
        );
    );
}

export default DatagridBody;
