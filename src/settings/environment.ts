const { __DEV__, __PROD__ } = process.env

export const environment = {
    production: __PROD__ || process.env.NODE_ENV === 'production',
    development: __DEV__ || process.env.NODE_ENV === 'development',
}
