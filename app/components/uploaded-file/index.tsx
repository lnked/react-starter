// import * as React from 'react'
// import * as css from './styles.scss'

// interface T {
//     name: string,
//     className: string
// }

// export default class UploadedFile extends React.Component<T, {}> {
//     static defaultProps = {
//         name: '',
//         className: ''
//     }

//     render () {
//         return (
//             <div className={`${css.file} ${this.props.className}`}>
//                 <a href="#" className={css.remove}>
//                     <svg className={css.remove__icon} role="image">
//                         <use xlinkHref="#close"/>
//                     </svg>
//                 </a>

//                 <div className={css.icon}>
//                     <img
//                         src={require('components/uploaded-file/assets/doc.svg')}
//                         className={css.icon__src}
//                         alt=""
//                     />
//                 </div>

//                 <div className={css.name}>
//                     { this.props.name }
//                 </div>
//             </div>
//         )
//     }
// }
