export const get = (action: string, params: any = {}) => {
    return new Promise((resolve, reject) =>
        fetch(action, {
            ...params,
        })
            .then((response: any) => resolve(response))
            .catch((error: any) => reject(error))
    )
}
