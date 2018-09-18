export const formatMoneyNative = (num: number | string) => {
    const formatter = new Intl.NumberFormat('ru-RU', {
        style: 'currency',
        currency: 'RUB',
        maximumSignificantDigits: 2,
    })

    return formatter.format(num)
}

export const formatMoney = (num: number | string, penny: number = 2, breaking = true) => {
    if (typeof penny === 'undefined') {
        penny = 2
    }

    let value =
        num &&
        parseFloat(num.toString())
            .toFixed(penny)
            .replace(/\d(?=(\d{3})+\.)/g, '$& ')
            .replace(/\./g, ',')
            .replace(/,0{2}/g, '')

    if (!breaking) {
        value = value && value.replace(/\s/g, '&nbsp;')
    }

    return value || 0
}
