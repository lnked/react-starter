import { observable, action, computed, extendObservable } from 'mobx'

export class AppStore {

  static mobxLoggerConfig: {
    enabled: false,
    methods: {
      loadTags: true,
    },
  }

  static defaultState = {
    query: '',
    isLoading: false,
    results: [],
  }

  // @observable results: string[]

  // @observable isLoading: boolean

  @observable
  query: string = ''

  constructor (initialState?: any) {
    // console.log({...AppStore.defaultState, ...initialState})

    if (initialState && Object.keys(initialState).length) {
      // extendObservable(this, {...AppStore.defaultState, ...initialState})
      extendObservable(this, initialState)
    }
  }

  @computed
  get getState () {
    return []
  }

  // async loadAll () {
  //     this.isLoading = true;
  //     await store.loadUsers();//вот первая
  //     const { match } = this.props;
  //     const userId = parseInt(match.params.id);
  //     await this.user.loadStats(userId);
  // }

  @action
  loadTags = (query: string) => {
    this.query = query
  }

}

export default AppStore
