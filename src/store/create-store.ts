/* global __DEV__ */

import { History } from 'history'

import { configure } from 'mobx'

import { enableLogging } from 'mobx-logger'

import { UiStore, AppStore, RouterStore } from 'store'

import { STORE_UI, STORE_APP, STORE_ROUTER } from 'settings/constants'

configure({
    enforceActions: 'observed', // 'never' | 'always' | 'observed'
})

enableLogging({
    predicate: () => __DEV__ && Boolean(window.navigator.userAgent),
    action: true,
    reaction: true,
    transaction: true,
    compute: true,
})

export const createStore = (history: History, initialState?: any[]) => {
    console.log(initialState)
    const uiStore = new UiStore()
    const appStore = new AppStore()
    const routerStore = new RouterStore(history)

    return {
        [STORE_UI]: uiStore,
        [STORE_APP]: appStore,
        [STORE_ROUTER]: routerStore,
    }
}
