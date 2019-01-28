import { Storage } from '../access-token'

export const logout = (reload?: boolean): void => {
  const AccessToken = new Storage()

  AccessToken.clear()

  if (reload) {
    location.href = '/auth/sign-in'
  }
}
