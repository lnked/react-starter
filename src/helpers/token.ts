import store from 'store2'

export const TOKEN = {
    set: (token: string) => store.set('token', token),
    get: () => store.get('token'),
    del: () => store.remove('token'),
}
