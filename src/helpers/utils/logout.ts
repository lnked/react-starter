import store from 'store2'

import { TOKEN } from '../token'

export const logout = (reload?: boolean): void => {

  TOKEN.del()

  store.remove('company')
  store.remove('company_id')

  if (reload) {

    location.href = '/auth/sign-in'

  }

}
