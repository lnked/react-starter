import * as React from 'react'
// import * as css from './styles.scss'

// import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

export class Animate extends React.Component {
    state = { items: ['hello', 'world', 'click', 'me'] }

    // componentWillAppear()
    // componentDidAppear()
    // componentWillEnter()
    // componentDidEnter()
    // componentWillLeave()
    // componentDidLeave()

    handleAdd = () => {
        // const newItems = this.state.items.concat([
        //     prompt('Enter some text')
        // ])
        // this.setState({ items: newItems })
    }

    handleRemove = (i) => {
        const newItems = this.state.items.slice()
        newItems.splice(i, 1)
        this.setState({ items: newItems })
    }

    render () {
        // const items = this.state.items.map((item, i) => (
        //     <div key={item} onClick={() => this.handleRemove(i)}>
        //         {item}
        //     </div>
        // ))

        // <ReactCSSTransitionGroup
        //     transitionName="example"
        //     transitionAppear={true}
        //     transitionAppearTimeout={500}
        //     transitionEnter={false}
        //     transitionLeave={false}>
        //     <h1>Fading at Initial Mount</h1>
        // </ReactCSSTransitionGroup>

        return (
            <div>
                <button onClick={this.handleAdd}>Add Item</button>
                {/* <ReactCSSTransitionGroup
                    transitionName="example"
                    transitionEnterTimeout={500}
                    transitionLeaveTimeout={300}>

                    {items}
                </ReactCSSTransitionGroup> */}
            </div>
        )
    }
}
