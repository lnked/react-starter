import axios from 'axios'

import token from './token'

const API_URL = process.env.REACT_APP_API_URL

export const auth = axios.create({
    baseURL: API_URL,
    headers: {
        Authorization: `Token ${token.get()}`
    }
})

export const noauth = axios.create({
    baseURL: API_URL
})


// <script>
// import axios from 'axios';
// import token from '@/helpers/token';
// import { API_URL } from '@/helpers/api';

// export default {
//   data() {
//     return {
//       service: null
//     };
//   },
//   created() {
//     let service = axios.create({
//       baseURL: API_URL,
//       headers: {
//         Authorization: `Token ${token.get()}`
//       }
//     });

//     service.interceptors.response.use(this.handleSuccess, this.handleError);

//     this.service = service;
//   },
//   methods: {
//     handleSuccess({ data, status }) {
//       console.log('handleSuccess: ', arguments, status, data);
//     },
//     handleError ({ response }) {
//       console.log('handleError: ', response.status, response.data);
//     }
//   }
// }
// </script>
// //
