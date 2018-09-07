import axios from 'axios'

import { TOKEN } from 'helpers/token'

export const API_URL = process.env.REACT_APP_API_URL

const authToken = TOKEN.get()

const headers: any = {
    'baseURL': API_URL,
    'Accept': 'application/json',
    'Content-Type': 'application/json; charset=utf-8',
}

if (authToken) {
    headers.Authorization = `Token ${authToken}`
}

// axios.defaults.baseURL = API_URL
// axios.defaults.headers.common.Accept = 'application/json'
// axios.defaults.headers.post['Content-Type'] = 'application/json'

export const request = axios.create({
    ...headers,
})
