import store from 'store'

// Store current user
store.set('user', { name: 'Marcus' })

// Get current user
store.get('user')

// Remove current user
store.remove('user')

// Clear all keys
store.clearAll()

// Loop over all stored values
store.each((value, key) => {
    console.log(key, '==', value)
})

// Example plugin that stores a version history of every value
// var versionHistoryPlugin = function() {
// var historyStore = this.namespace('history')
// return {
// set: function(super_fn, key, value) {
// var history = historyStore.get(key) || []
// history.push(value)
// historyStore.set(key, history)
// return super_fn()
// },
// getHistory: function(key) {
// return historyStore.get(key)
// }
// }
// }
// store.addPlugin(versionHistoryPlugin)
// store.set('foo', 'bar 1')
// store.set('foo', 'bar 2')
// store.getHistory('foo') == ['bar 1', 'bar 2']

// Example custom build usage:
// var engine = require('store/src/store-engine')
// var storages = [
// require('store/storages/localStorage'),
// require('store/storages/cookieStorage')
// ]
// var plugins = [
// require('store/plugins/defaults'),
// require('store/plugins/expire')
// ]
// var store = engine.createStore(storages, plugins)
// store.set('foo', 'bar', new Date().getTime() + 3000) // Using expire
// var storage = {
// name: 'myStorage',
// read: function(key) { ... },
// write: function(key, value) { ... },
// each: function(fn) { ... },
// remove: function(key) { ... },
// clearAll: function() { ... }
// }
// var store = require('store').createStore(storage)
