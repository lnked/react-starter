import * as React from 'react'
import * as css from './styles.scss'

import { classes } from 'helpers'

export interface P {
  source?: any;
  title: string;
}

export interface S {
  isLoading: boolean;
}

const cx = classes.bind(css)

export class Image extends React.Component<P, S> {

  static defaultProps = {
    title: '',
    source: {
      webp: false,
      jpg: false,
    },
    aspectRatio: 1,
  }

  state = {
    isLoading: true,
  }

  componentDidMount() {
    this.loadImage(this.props.url)
  }

  loadImage = (src: string) => {
    this.setState({ isLoading: true })

    const img = new Image()

    img.onload = () => {
      this.setState({ isLoading: false })
    }

    img.src = src
  }

  render () {
    const { isLoading } = this.state
    const { source, title } = this.props
    const { webp, jpg } = source

    if (isLoading) {
      return <p>Загружаю...</p>
    }

    return (
      <picture className={cx({ content: true })}>
        <source type="image/webp" srcSet={webp} />
        <source type="image/jpeg" srcSet={jpg} />
        <img src={jpg} alt={title} />
      </picture>
    )
  }

}
