// import * as React from 'react'
// import * as css from './styles.scss'

// let strLen = 35

// if (document.body.clientWidth < 640) {
//     strLen = 60
// }

// interface T {
//     line: number;
//     align: string;
//     string: string;
//     className: string;
//     children?: string | React.ReactChild | React.ReactNode | any[];
// }

// export default class Truncate extends React.Component<T, {}> {
//     static defaultProps = {
//         align: 'left',
//         className: '',
//         children: ''
//     }

//     componentWillMount () {
//         this.setState({
//             title: this.props.children || this.props.string
//         })
//     }

//     renderDots = () => {
//         if (this.state.title && this.state.title.length >= strLen) {
//             return (
//                 <span>...</span>
//             )
//         }
//     }

//     renderText = () => {
//         return (
//             <div className={css.text}>
//                 <a href="#" className={css.text__link}>{ this.state.title.substr(0, strLen) }{ this.renderDots() }</a>
//             </div>
//         )
//     }

//     renderTooltip = () => {
//         if (this.state.title && this.state.title.length >= strLen) {
//             return (
//                 <div className={css.tooltip}>
//                     { this.state.title }
//                 </div>
//             )
//         }
//     }

//     render () {
//         return (
//             <div className={`${css.truncate} ${css[`truncate--align-${this.props.align}`]} ${this.props.className}`}>
//                 { this.renderText() }
//                 { this.renderTooltip() }
//             </div>
//         )
//     }
// }
