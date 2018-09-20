import { isUndefined } from '../predicts/is-undefined'

export const prettyDadataParty = (data: any): any => {
    const address: any = {
        is_main: true,
    }

    const addr = data && data.address && data.address.data

    if (addr && !isUndefined(addr)) {
        if (!isUndefined(addr.geo_lat)) {
            address.geo_lat = addr.geo_lat
        }

        if (!isUndefined(addr.geo_lon)) {
            address.geo_lon = addr.geo_lon
        }

        if (!isUndefined(addr.country)) {
            address.country = addr.country
        }

        if (!isUndefined(addr.source)) {
            address.source = addr.source
        }

        if (!isUndefined(addr.result)) {
            address.result = addr.result
        }

        if (!isUndefined(addr.region)) {
            address.region = addr.region
        }

        if (!isUndefined(addr.city)) {
            address.city = addr.city
        }

        if (!isUndefined(addr.street)) {
            address.street = addr.street
        }

        if (!isUndefined(addr.house)) {
            address.house = addr.house
        }
    } else if (!isUndefined(data.address) && !isUndefined(data.address.value)) {
        address.source = data.address.value
    }

    return {
        address,
        hid: data.hid || '',
        inn: data.inn || '',
        kpp: data.kpp || '',
        ogrn: data.ogrn || '',
        name: (data.name && data.name.short_with_opf) || '',
    }
}
