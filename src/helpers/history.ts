import { createBrowserHistory } from 'history'

// Navigation manager, e.g. history.push('/home')
// https://github.com/mjackson/history
export const browserHistory: any = process.env.BROWSER && createBrowserHistory()
