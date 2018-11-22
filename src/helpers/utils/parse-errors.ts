export const parseError = (json: any): any => {

  const response = {}

  if (json && Object.keys(json).length) {

    Object.keys(json).map(name => {

      let error = json[name]

      if (error.length === 1) {

        error = error.shift()

      }

      response[name] = error

    })

  }

  return response

}
