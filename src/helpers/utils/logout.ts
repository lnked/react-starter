import store from 'store2'

import { AccessToken } from '../access-token'

export const logout = (reload?: boolean): void => {
  AccessToken.clear()

  store.remove('company')
  store.remove('company_id')

  if (reload) {
    location.href = '/auth/sign-in'
  }
}
