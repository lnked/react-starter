/**
 * Init state
 */
import ui from './ui'
import base from './base'

export default {
    ...ui,
    ...base
}

// export function drawMode(store) {
//     return store.state.map.drawMode
// }

// export function base(store) {
//     return store.state.base  || {}
// }

// export function overlay(store) {
//     return store.state.overlay  || {}
// }

// export function selectedOverlayFeat(store) {
//     var sel = store.state.ui.overlays.sel
//     if(sel){
//         var feat = store.state.overlays[sel.cat][sel.id]
//         return _.extend({},sel, feat)
//     }
//     return null
// }

// export function selectedOverlayText(store){
//     return store.state.ui.overlays.text
// }

// export function selectedStand(store){
//     var id = store.state.ui.stands.sel
//     return store.state.stands[id]
// }

