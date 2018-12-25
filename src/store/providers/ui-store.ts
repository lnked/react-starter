// import { AppStore } from './'
import { observable, action, computed } from 'mobx'

export class UiStore {

  @observable
  type: string = 'grid'

  constructor (initialState?: any) {
    console.log({ initialState })
  }

  @computed
  get view_type () {
    return this.type
  }

  @computed
  get getState () {
    return this.type
  }

  @action
  set (type: string) {
    this.type = type
  }

}

export default UiStore
