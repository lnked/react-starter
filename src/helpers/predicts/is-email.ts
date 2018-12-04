export const isEmail = (str: string) => {
  /* eslint-disable */
  const re = new RegExp(
    // tslint:disable-next-line
    /^(([^\s"(),.:;<>@[\\\]]+(\.[^\s"(),.:;<>@[\\\]]+)*)|(".+"))@((\[(?:\d{1,3}\.){3}\d{1,3}])|(([\d-A-Za-z]+\.)+[A-Za-z]{2,}))$/
  )
  /* eslint-enable */

  return str && !re.test(str[name])
}
