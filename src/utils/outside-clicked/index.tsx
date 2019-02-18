import * as React from 'react'

export interface P {
  children: JSX.Element[] | JSX.Element | any;
}

export interface S {
  opened: null | string;
}

export default class OutsideClicked extends React.Component<P, S> {

  wrapper: any = React.createRef()

  state = {
    opened: null,
  }

  componentDidMount () {
    document.addEventListener('mousedown', this.handleClickOutside)
  }

  componentWillUnmount () {
    document.removeEventListener('mousedown', this.handleClickOutside)
  }

  handleClickOutside = (e: Event) => {
    if (this.wrapper && !this.wrapper.contains(e.target)) {
      this.setState({
        opened: null,
      })
    }
  }

  onChildClick = (name: string) => {
    this.setState({
      opened: name,
    })
  }

  render () {
    const { opened } = this.state
    const { children } = this.props

    return (
      <div ref={this.wrapper}>
        {React.cloneElement(children, {
          opened,
          onChildClick: this.onChildClick,
        })}
      </div>
    )
  }

}
