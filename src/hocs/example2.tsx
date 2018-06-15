// // Без параметров:
// const withSort = WrappedComponent => props => {
//   return WrappedComponent ? <WrappedComponent {...props} /> : null;
// });

// // Использование:
// export default withSort(Component);


// // C параметрами:
// const withSort = (...params) => WrappedComponent => props => {
//   // params usage
//   return WrappedComponent ? <WrappedComponent {...props} /> : null;
// });

// // Использование:
// export default withSort(param1, param2)(Component);
