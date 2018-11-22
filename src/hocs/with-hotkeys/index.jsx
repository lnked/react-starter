import * as React from 'react'

export function withHotkeys (RComponent) {

  class withHotkeysComponent extends React.Component {

        remove = (url, data) => this.register().delete(url, data || {})

        render () {

          return <RComponent {...this.props} remove={this.remove} />

        }

  }

  withHotkeysComponent.displayName = `withRequest(${RComponent.displayName || RComponent.name || 'Component'})`

  return withHotkeysComponent

}
