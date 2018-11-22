export const preparePhone = (str: string) => {

  let phone = str && str.replace(/\s/g, '')

  if (phone && phone.substring(0, 1) !== '+') {

    phone = `+${phone}`

  }

  return phone

}
