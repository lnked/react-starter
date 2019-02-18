const formatMoneyNative = (num: number, currency: string = 'RUB'): number | string => {
  const formatter = new Intl.NumberFormat('ru-RU', {
    style: 'currency',
    currency,
    maximumSignificantDigits: 2,
  })

  return num && formatter.format(num)
}

export default formatMoneyNative
