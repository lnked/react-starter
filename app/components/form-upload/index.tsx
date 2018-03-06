// import * as React from 'react'
// import * as css from './styles.scss'

// interface T {
//     type: string,
//     file: object,
//     title: string,
//     status: string,
//     progress: number,
//     className: string
// }

// export default class FormUpload extends React.Component<T, {}> {
//     static defaultProps = {
//         type: 'normal',
//         status: 'default',
//         progress: 0,
//         title: 'Перетащите сюда файлы или <span>выберите на компьютере</span>',
//         className: ''
//     }

//     render () {
//         const { type, file, progress, status } = this.props
//         const html = {__html: this.props.title}

//         const append: any = []
//         const className: any = []

//         className.push(`${css.upload}`)
//         className.push(`${css[`upload_${type}`]}`)
//         className.push(`${css[`upload_status-${status}`]}`)
//         className.push(`${this.props.className}`)

//         if (status === 'progress') {
//             const style = {
//                 width: `${progress}%`
//             }

//             append.push(
//                 <div className={css.file} key="file">
//                     <div className={css.file__icon}>
//                         <img src={file.ico} className={css.file__icon__src} alt="" />
//                     </div>

//                     <div className={css.file__content}>
//                         <div className={css.file__name}>{ file.name } — { file.size }</div>

//                         <div className={css.progress}>
//                             <div className={css.progress__bar} style={style} />
//                         </div>
//                     </div>
//                 </div>
//             )
//         } else {
//             append.push(<div className={css.message} dangerouslySetInnerHTML={html} key="message" />)
//         }

//         return (
//             <div className={className.join(' ')}>
//                 { append }
//             </div>
//         )
//     }
// }
