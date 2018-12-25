import axios from 'axios'

import { TOKEN } from '../token'
import { API_URL } from '../api'

const headers: any = {
  'Accept': 'application/json',
  'Content-Type': 'application/json',
}

export const request: any = (options: any = { noToken: false }): any => {
  const noToken = Object.keys(options).length && options.hasOwnProperty('noToken') && options.noToken

  if (!noToken) {
    const authToken = TOKEN.get()

    if (authToken) {
      headers.Authorization = `Token ${authToken}`
    }
  }

  return axios.create({
    baseURL: API_URL,
    headers,
  })
}
