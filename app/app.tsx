import * as React from 'react'
import { render } from 'react-dom'
import Message from './components/message'

class App extends React.Component<{}, {}> {
  render() {
    return (
      <div>
        <Message
          message='hello'
          text='world'
        />
      </div>
    )
  }
}

render(<App />, document.getElementById('root'))
