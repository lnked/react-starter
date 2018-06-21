import { request } from 'helpers/request'

import {
    observable,
    action,
    computed
} from 'mobx'

export default class BuyersState {
    @observable item: any = {}
    @observable list: Array<any> = []

    load () {
        request.get('/partner/buyers')
            .then(res => res.data)
            .then(response => {
                const buyers: Array<any> = []

                response.results.map(item => {
                    buyers.push(item)
                })

                this.set_list(buyers)
            })
            .catch(response => console.log('partner/buyers ERROR: ', response))
    }

    loadItem (id) {
        request.get(`/partner/buyers/${id}`)
            .then(res => res.data)
            .then(response => {
                this.set(response)
            })
            .catch(response => console.log('partner/buyers ERROR: ', response))
    }

    @computed
    get buyer () {
        return this.item
    }

    @computed
    get buyers () {
        return this.list
    }

    @action
    set (item: any) {
        this.item = item
    }

    @action
    set_list (list: Array<any>) {
        this.list = list
    }
}
