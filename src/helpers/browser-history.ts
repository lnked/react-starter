import { createBrowserHistory } from 'history'

// https://github.com/mjackson/history
const browserHistory: any = process.env.BROWSER && createBrowserHistory()

export default browserHistory
