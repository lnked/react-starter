import axios from 'axios'

import token from './token'

const API_URL = process.env.API_URL

export const auth = axios.create({
    baseURL: API_URL,
    headers: {
        Authorization: `Token ${token.get()}`
    }
})

export const noauth = axios.create({
    baseURL: API_URL
})
