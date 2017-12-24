import Loadable from 'react-loadable'
import Page1 from './my-loading-component'

function Loading(props) {
  if (props.error) {
    return <div>Error!</div>;
  } else if (props.timedOut) {
    return <div>Taking a long time...</div>;
  } else if (props.pastDelay) {
    return <div>Loading...</div>;
  } else {
    return null;
  }
}


const LoadableComponent = Loadable({
    loader: () => import('./my-component'),
    loading: Page1
})

Loadable({
  loader: () => import('./components/Bar'),
  loading: Loading,
  delay: 300, // 0.3 seconds
});


export default class App extends React.Component {
    render() {
        return <LoadableComponent/>
    }
}


// class MyComponent extends React.Component {
//   state = {
//     Bar: null
//   };

//   componentWillMount() {
//     import('./components/Bar').then(Bar => {
//       this.setState({ Bar });
//     });
//   }

//   render() {
//     let {Bar} = this.state;
//     if (!Bar) {
//       return <div>Loading...</div>;
//     } else {
//       return <Bar/>;
//     };
//   }
// }

// With loadable

// import Loadable from 'react-loadable';

// const LoadableBar = Loadable({
//   loader: () => import('./components/Bar'),
//   loading() {
//     return <div>Loading...</div>
//   }
// });

// class MyComponent extends React.Component {
//   render() {
//     return <LoadableBar/>;
//   }
// }
