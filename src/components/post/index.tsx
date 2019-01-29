import * as React from 'react'
import Skeleton from 'react-loading-skeleton'

export class Post extends React.Component<{}, {}> {

  static defaultProps = {}

  componentDidMount () {
    console.log(this.props)
  }

  render () {
    return (
      <div style={{ fontSize: 12, lineHeight: 1.4 }}>
        <h1 style={{ fontSize: 20, fontWeight: 700 }}><Skeleton /></h1>
        <Skeleton count={10} />
      </div>
    )
  }

}
