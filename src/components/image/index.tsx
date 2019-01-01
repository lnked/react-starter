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

// <picture class="x jsx-803673281 gray">
//   <source media="(max-width: 767px)" type="image/webp" srcSet="/static/xxx@1x.webp,
//   /static/xxx@2x.webp 2x,
//   /static/xxx@3x.webp 3x" class="x" />
//   <source media="(max-width: 767px)" srcSet="/static/xxx@1x.png,
//   /static/xxx@2x.png 2x,
//   /static/xxx@3x.png 3x" class="x" />
//   <source media="(max-width: 1279px)" type="image/webp" srcSet="/static/images/school/1024/xxx2@1x.webp,
//   /static/images/school/1024/xxx2@2x.webp 2x,
//   /static/images/school/1024/xxx2@3x.webp 3x" class="x" />
//   <source media="(max-width: 1279px)" srcSet="/static/images/school/1024/xxx2@1x.png,
//   /static/images/school/1024/xxx2@2x.png 2x,
//   /static/images/school/1024/xxx2@3x.png 3x" class="x" />
//   <source media="(max-width: 1359px)" type="image/webp" srcSet="/static/images/school/1280/xxx2@1x.webp,
//   /static/images/school/1280/xxx2@2x.webp 2x,
//   /static/images/school/1280/xxx2@3x.webp 3x" class="x" />
//   <source media="(max-width: 1359px)" srcSet="/static/images/school/1280/xxx2@1x.png,
//   /static/images/school/1280/xxx2@2x.png 2x,
//   /static/images/school/1280/xxx2@3x.png 3x" class="x" />
//   <source media="(max-width: 1919px)" type="image/webp" srcSet="/static/images/school/1360/xxx2@1x.webp,
//   /static/images/school/1360/xxx2@2x.webp 2x,
//   /static/images/school/1360/xxx2@3x.webp 3x" class="x" />
//   <source media="(max-width: 1919px)" srcSet="/static/images/school/1360/xxx2@1x.png,
//   /static/images/school/1360/xxx2@2x.png 2x,
//   /static/images/school/1360/xxx2@3x.png 3x" class="x" />
//   <source type="image/webp" srcSet="/static/images/school/1920/xxx2@1x.webp,
//   /static/images/school/1920/xxx2@2x.webp 2x,
//   /static/images/school/1920/xxx2@3x.webp 3x" class="x" /><img srcSet="/static/images/school/1920/xxx2@1x.png,
//   /static/images/school/1920/xxx2@2x.png 2x,
//   /static/images/school/1920/xxx2@3x.png 3x"
// src="/static/images/school/1920/xxx2@1x.png" alt="High Middle React разработчик" class="x jsx-803673281 gray" />
// </picture>
