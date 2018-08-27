import * as React from 'react'
import * as css from './styles.scss'

import { classes } from 'helpers'

export interface P {
    image: any;
    lqip?: string;
    width?: number;
    height?: number;
    title?: string;
    alt?: string;
    className?: string;
}

const cx = classes.bind(css)

export class Picture extends React.Component<P, {}> {
    static defaultProps = {
        width: 'auto',
        height: 'auto',
        alt: '',
        preload: false,
        className: '',
    }

    state = {
        loaded: false,
    }

    componentDidMount () {
        this.load()
    }

    load = () => {
        const img = new Image()

        img.onload = () => this.setState({ loaded: true })

        img.src = this.props.image
    }

    render () {
        const { loaded } = this.state
        const { className, image, width, height, title, alt } = this.props

        // const props: any = {
        //     width,
        //     height
        // }

        // if (title) {
        //     props.title = title
        // }

        // const img = {
        //     width,
        //     height,
        //     maxWidth: '100%',
        //     border: '1px solid red'
        // }

        return (
            <div className={cx({ image: true }, className)}>
                {loaded && <img src={image} width={width} height={height} title={title} alt={alt} />}
                {/*
                <picture>
                    <source srcset="your-image.webp" type="image/webp">
                    <img src="your-image.jpg">
                </picture>
                */}
                {/* {loaded && <img src={image} {...props} alt={alt} />} */}
                {/* {!loaded && <svg style={img} />} */}

                {/*
                <div style={{background: `no-repeat cover url("${lqip}")`}}>
                    <svg width={width} height={height} />
                </div>
                 */}
            </div>
        )
    }
}

// <picture>
// <source
// srcset="<список URL c дескрипторами>"
// [sizes="<ваши размеры в зависимости от раскладки>"]
// [media="<медиавыражение>"]
// [type="<mime/type>"]
// >
// <source ...>
// ...
// <img src="image.jpg" alt="My image"
// [srcset="<список URL с дескрипторами>"]
// [sizes="<ваши размеры в зависимости от раскладки>"]>
// </picture>

// <img
// src="images/400.jpg"
// srcset="images/800.jpg 2x, images/1200.jpg 3x"
// width="400" height="300"
// >

// <img
// src="images/400.jpg"
// srcset=" 400w, images/800.jpg 800w, images/1200.jpg 1200w"
// sizes="(min-width: 700px) 75vw, 100vw"
// >

// <img src="image.jpg" alt="My image"
// [srcset="<список URL с дескрипторами>"]
// [sizes="<ваши размеры в зависимости от раскладки>"]>

// <picture>
// <source srcset="images/400.webp" type="image/webp">
// <img src="images/400.jpg"
// width="400" height="300"
// >
// </picture>
