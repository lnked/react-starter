import axios from 'axios'
import { TOKEN } from './token'

export const API_URL = process.env.REACT_APP_API_URL

const headers: any = {
    'Accept': 'application/json',
    'Authorization': `Token ${TOKEN.get()}`,
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json; charset=utf-8',
}

export const request: any = axios.create({
    baseURL: API_URL,
    headers,
})
