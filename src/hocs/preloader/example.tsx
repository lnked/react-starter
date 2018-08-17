// import * as React from "react"
// import { IWithPersonalizationProps, withPersonalization } from "./withPersonalization"

// export interface IWelcomeOwnProps {
//     onClick: () => void
// }

// export class Welcome extends React.Component<IWelcomeOwnProps & IWithPersonalizationProps, {}> {

//     constructor(props: IWelcomeOwnProps & IWithPersonalizationProps) {
//         super(props)
//         this.onNameClicked = this.onNameClicked.bind(this)
//     }

//     public render(): JSX.Element {
//         return (
//             <div onClick={this.onNameClicked}>Welcome, {this.props.name}!</div>
//         )
//     }

//     private onNameClicked<P>(event: React.MouseEvent<P>) {
//         event.preventDefault()
//         this.props.onClick()
//     }

// }

// export Preloader(Welcome)
