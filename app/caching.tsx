class ParentComponent extends React.Component {
    _callbacks = {};

    _getOnClick = (index) => {
        if (!this._callbacks[index]) {
            this._callbacks[index] = () => doSomehing(index);
        }

        return this._callbacks[index];
    }

    render() {
        return (
            <div>
                {this.props.items.map((item, index) => (
                    <ChildComponent
                        onClick={this._getOnClick(index)}
                        item={item}
                    />
                ))}
            </div>
        );
    }
}
