import * as React from "react";
import * as PropTypes from "prop-types";

interface IExampleComponentProps {
    text?: string;
    onCounterIncrease: (count: number) => void;
}

interface IExampleComponentState {
    clicks: number;
}

const initialState: IExampleComponentState = {
    clicks: 0
};

// interface IMyProps {
//     text?: string; // an optional text field
//     myFunc: (count: number) => void; // a required function
//     myObj: ISomeClass; // an object whose type is defined by the inteface ISomeClass
// }

// class MyComponent extends React.Component<IMyProps, IMyState> {
//     // ...
// }

export class ExampleComponent extends React.Component<IExampleComponentProps, IExampleComponentState> {

    // propTypes is unnecessary
    static propTypes = {
        text: PropTypes.string,
        onCounterIncrease: PropTypes.func.isRequired
    };

    static defaultProps = {
        text: "World"
    };

    constructor(props: IExampleComponentProps) {
        super(props);
        this.state = initialState;
        this.onClick = this.onClick.bind(this);
    }

    componentDidUpdate(prevProps: IExampleComponentProps, prevState: IExampleComponentState): void {
        if (this.props.onCounterIncrease) {
            this.props.onCounterIncrease(this.state.clicks);
        }
    }

    render(): JSX.Element {
        return (
            <div>
                <div className="hello">Hello, {this.props.text}!</div>
                <div>Clicks: {this.state.clicks}</div>
                <button onClick={this.onClick} >Increase</button>
            </div>
        );
    }

    private onClick(): void {
        const newClicks = this.state.clicks + 1;
        this.setState({ clicks: newClicks });
    }
}

export default ExampleComponent;
