const formatMoney = (num: number, penny: number = 2, breaking: boolean = true): number | string => {
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

  return (num && value) || 0
}

export default formatMoney
