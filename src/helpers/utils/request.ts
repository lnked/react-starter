import axios from 'axios'

import { AccessToken } from '../access-token'
import { API_URL } from '../api'

export const refreshToken = () => ({})

export const request: any = (options: any = { noToken: false }) => {
  const noToken = Object.keys(options).length && options.hasOwnProperty('noToken') && options.noToken

  const headers: any = {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  }

  if (!noToken) {
    const authorizationToken = AccessToken.get()

    if (authorizationToken) {
      headers['x-access-token'] = `${authorizationToken}`
    }
  }

  return axios.create({
    baseURL: API_URL,
    headers,
  })
}
