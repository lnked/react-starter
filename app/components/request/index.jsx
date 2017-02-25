componentWillReceiveProps(nextProps) {
  if (nextProps.complete && !this.props.complete) this.sendRequest();
}

shouldComponentUpdate(nextProps) {
  const changed = Object.keys(nextProps).filter(e => nextProps[e] !== this.props[e]);
  if (changed.length == 1 && changed[0] == 'complete') return false;
}



var WebStorage = require('react-webstorage')
, dispatcher = require('./path/to/app-dispatcher')
;
 
var webStorage = new WebStorage(window.localStorage ||
    window.sessionStorage /* or poly-fill thereof */
);
 
dispatcher.register((payload) => {
    switch (payload.actionType) {
    case 'A':
        webStorage.setItem(payload.key, payload.item);
        break;
    case 'B':
        webStorage.removeItem(payload.key);
        break;
    case 'C': 
        webStorage.clear();
        break;
    default:
        return;
    }
});
 
// Later, inside a component... 

getInitialState () => {
    return {
        foo: webStorage.getItem('foo');
    };
}

updateState () => {
    this.setState({
        foo: webStorage.getItem('foo')
    });
},
componentDidMount () => {
    webStorage.addListener('change', this.updateState);
},
componentWillUnmount () => {
    webStorage.removeListener('change', this.updateState);
}
