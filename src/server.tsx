import * as React from 'react'
import { renderToString } from 'react-dom/server'
// import { Provider } from 'react-redux'
// import configureStore from './redux/configureStore'
import App from './app'

export const render = (initialState: any) => {
  // const store = configureStore(initialState)
  // <Provider store={store}></Provider>

  console.log(initialState)

  const content = renderToString(
    <App />
  )

  // const preloadedState = store.getState()
  // return { content, preloadedState }
  return { content, {} }
}
