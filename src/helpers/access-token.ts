// import { session, local } from 'storage.io'
// https://www.npmjs.com/package/storage.io
import { session } from 'storage.io'

class Storage {

  get = (name: string = 'token') => session.get(name)

  set = (name: string = 'token', value: string) => session.set(name, value)

  clear = (name: string = 'token') => session.remove(name)

}

export default Storage
