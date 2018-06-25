// // Без параметров:
// const withSort = WrappedComponent => props => {
//   return WrappedComponent ? <WrappedComponent {...props} /> : null;
// });

// // Использование:
// export withSort(Component);


// // C параметрами:
// const withSort = (...params) => WrappedComponent => props => {
//   // params usage
//   return WrappedComponent ? <WrappedComponent {...props} /> : null;
// });

// // Использование:
// export withSort(param1, param2)(Component);
