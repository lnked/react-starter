// export default get = (action, params = {}) => {
//     return new Promise((resolve, reject) =>
//         fetch(UrlHelper.apiUrl(action, params), {
//             credentials: 'same-origin'
//         })
//         .then(response => {
//             return Api.checkStatus(resolve, reject, response)
//         })
//         .then(([ ok, response ]) => {
//             return ok ? resolve(response) : reject(response)
//         })
//     )
// }
