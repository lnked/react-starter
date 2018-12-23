const { __DEV__, __PROD__, NODE_ENV = 'production' } = process.env

export const environment = {
  production: __PROD__ || NODE_ENV === 'production',
  development: __DEV__ || NODE_ENV === 'development',
}
