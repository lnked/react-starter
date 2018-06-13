import store from 'store2'

export const TOKEN = {
    set: (token) => store.set('token', token),
    get: () => store.get('token'),
    del: () => store.remove('token')
}
