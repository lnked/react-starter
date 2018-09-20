import store from 'store2'

export const TOKEN = {
    set: (value: string) => store.set('token', value),
    get: () => store.get('token'),
    del: () => store.remove('token'),
}
