import React, {Component} from "react";

class DigitalClicker extends Component {
    constructor(props) {
        super(props);
        this.state = {
            timesClicked: 0,
        };
    }

    updateTimesClicked = () => {
        const updatedClickCount = ++this.state.timesClicked
        this.setState({
            timesClicked: updatedClickCount
        })

    }

    render() {
        return (
            <div>
            <button onClick={this.updateTimesClicked}>{`${this.state.timesClicked}`}</button>
            </div>
        )
        };
    }

    export default DigitalClicker

