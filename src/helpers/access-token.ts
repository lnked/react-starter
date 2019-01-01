import store from 'store2'

export const AccessToken = {
  set: (value: string) => store.set('token', value),
  get: () => store.get('token'),
  clear: () => store.remove('token'),
}
