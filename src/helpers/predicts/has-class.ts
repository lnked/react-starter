export const hasClass = (element: any, classList: string[]) => {

  let includes = false
  const { className } = element

  classList.map(cn => {

    if (!includes) {

      includes = cn && className && className.length && className.indexOf(cn) > -1

    }

  })

  return element && includes

}
