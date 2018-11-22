export const parseQuery = (search: string) => {

  const params = {}

  if (search.substr(0, 1) === '?') {

    search = search.substr(1)

  }

  const temp = search.split('&')

  if (temp.length) {

    temp.map(item => {

      const cache = item.split('=')
      params[cache[0]] = cache[1]

    })

  }

  return search && params

}
