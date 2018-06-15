import { ui } from 'store/ui'
import { crop } from 'store/crop'
import { declaration } from 'store/declaration'

interface P {
    WITH_CROP: boolean;
    GET_CROP: number;
    GET_CROPS: any;
    GET_VIEW_TYPE: string;
    GET_DECLARATION: any;
}

export const computed: P = {
    get WITH_CROP () {
        return crop.id !== 0
    },

    get GET_CROP () {
        return crop.id
    },

    get GET_CROPS () {
        return crop.crops
    },

    get GET_VIEW_TYPE () {
        return ui.viewType
    },

    get GET_DECLARATION () {
        return declaration.list
    }
}
