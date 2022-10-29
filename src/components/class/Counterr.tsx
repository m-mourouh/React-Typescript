import { Component } from "react";

type CounterProps = {
    message: string
}
type CounterState = {
    count: number
}
// <propsType,stateType> || <propsType> || <{},stateTypes> 
export  class Counterr extends Component<CounterProps, CounterState> {
    state = {
            count : 0
    }

    handleClick = () => {
        this.setState(prevState => ({count: prevState.count + 1}));
    }

    render() {
        return(
            <div>
                <button onClick={this.handleClick}>increment</button>
                <p>{this.props.message} {this.state.count}</p>
            </div>
        )
    }
}