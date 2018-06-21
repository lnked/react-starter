import { request } from 'helpers/request'

import {
    observable,
    action,
    computed
} from 'mobx'

export default class CropsState {
    @observable id: number = 0
    @observable list: any = {}

    load (callback) {
        request.get('/catalogue/crop')
            .then(response => {
                const crops = {}

                response.data.map(item => {
                    crops[item.id] = item
                })

                this.setCrops(crops)

                callback()
            })
            .catch(response => console.log('catalogue/crop ERROR: ', response))
    }

    @computed
    get crop () {
        return this.id
    }

    @computed
    get crops () {
        console.log('crops: ', this.list)
        return this.list
    }

    @computed
    get count () {
        return this.list.length
    }

    @action
    set (id: number) {
        this.id = id
    }

    @action
    setCrops (list: any) {
        this.list = list
    }
}
