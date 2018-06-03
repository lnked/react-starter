// yarn add react-lazyload
// import { lazyload } from 'react-lazyload';

// @lazyload({
//   height: 200,
//   once: true,
//   offset: 100
// })
// class MyComponent extends React.Component {
//   render() {
//     return <div>this component is lazyloaded by default!</div>;
//   }
// }

// import React from 'react';
// import ReactDOM from 'react-dom';
// import LazyLoad from 'react-lazyload';
// import MyComponent from './MyComponent';

// const App = () => {
//   return (
//     <div className="list">
//       <LazyLoad height={200}>
//         <img src="tiger.jpg" /> /*
//                                   Lazy loading images is supported out of box,
//                                   no extra config needed, set `height` for better
//                                   experience
//                                  */
//       </LazyLoad>
//       <LazyLoad height={200} once >
//                                 /* Once this component is loaded, LazyLoad will
//                                  not care about it anymore, set this to `true`
//                                  if you're concerned about improving performance */
//         <MyComponent />
//       </LazyLoad>
//       <LazyLoad height={200} offset={100}>
//                               /* This component will be loaded when it's top
//                                  edge is 100px from viewport. It's useful to
//                                  make user ignorant about lazy load effect. */
//         <MyComponent />
//       </LazyLoad>
//       <LazyLoad>
//         <MyComponent />
//       </LazyLoad>
//     </div>
//   );
// };
