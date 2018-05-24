/**
 * Init state
 */
export default {
    email: 'undefined',
    permissions: [],
    map: {
        drawMode: 'undefined',
        size_m: 'undefined'
    },
    pavilions: [],
    exponents: {},
    expositions: {},
    event_id: 'undefined',
    base: 'undefined',
    overlays: {
        lines: {},
        notes: {}
    },
    finance: {
        stand_markups: {},
        currency: '',
        price_equipped_area: 0,
        price_unequipped_area: 0
    },
    dashboard: 'undefined',
    stands: 'undefined',
    equipment_types: {},
    ui: {
        error: '',
        socketConnected: false,
        selectedPavilionId: 'undefined',
        overlays: {
            sel: 'undefined',
            text: 'Text label',
            edit: false,
            textColor: '#000000',
            fontFamily: 'Roboto Regular',
            italic: false,
            bold: false,
            underline: false,

            lineColor: '#000000',
            lineWeight: 2,
            lineDashed: false
        },
        stands: {
            code: '',
            color: '#92d050',
            type: 'open_3',
            area_type: '1',
            status: '0',
            width: 5,
            height: 5,
            label_pos: 'top',
            exponent_name: '',
            price: 0,

            sel: 'undefined',
            edit: false,
            edit_exponents: false,
            size: {x: 10, y: 10},
            commercial_offer_show: false
        },
        equipments: {
            edit: false,
            types: {},
            sel: 'undefined'
        }
    }
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

