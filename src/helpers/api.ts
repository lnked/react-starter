import axios from 'axios'
import { setupCache } from 'axios-cache-adapter'

import { TOKEN } from './token'

export const API_URL = process.env.REACT_APP_API_URL

const headers: any = {
    'Accept': 'application/json',
    'Authorization': `Token ${TOKEN.get()}`,
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json; charset=utf-8'
}

const config: any = {
    baseURL: API_URL,
    headers
}

const cache = setupCache({
    maxAge: 15 * 60 * 1000
})

config.adapter = cache.adapter

export const request = axios.create(config)
