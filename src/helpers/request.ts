import axios from 'axios'

import { TOKEN } from 'helpers/token'

import { API_URL } from 'helpers/api'

const authToken = TOKEN.get()

const headers: any = {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
}

if (authToken) {
    headers.Authorization = `Token ${authToken}`
}

export const request = axios.create({
    baseURL: API_URL,
    headers,
})
