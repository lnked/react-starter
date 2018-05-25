import axios from 'axios'

import token from './token'

export const API_URL = process.env.REACT_APP_API_URL

export const file = axios.create({
    baseURL: API_URL,
    headers: {
        'Accept': 'application/json',
        'Authorization': `Token ${token.get()}`,
        'Content-type': 'multipart/form-data',
        'Access-Control-Allow-Origin': '*',
    }
})

export const auth = axios.create({
    baseURL: API_URL,
    headers: {
        'Accept': 'application/json',
        'Authorization': `Token ${token.get()}`,
        'Content-Type': 'application/json; charset=utf-8',
        'Access-Control-Allow-Origin': '*',
    }
})

export const noauth = axios.create({
    baseURL: API_URL
})
