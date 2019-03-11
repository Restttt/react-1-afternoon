import React, {Component} from 'react';

class Sum extends Component {
    constructor() {
        super();
        this.state = {
            number1: 0,
            number2: 0,
            sum: null,
        }
    }

    updateInput1 = (val) => {
        this.setState({number1: val});
    }

    updateInput2 = (val) => {
        this.setState({number2: val});
    }

    getSum = (val1, val2) => {
        let num1 = parseInt(val1)
        let num2 = parseInt(val2)
        let total = num1 + num2
        this.setState({sum: total})
    }

    render() {
        return (
            <div className="puzzleBox sumPB">
                <h4>Sum</h4>
                <input className="inputLine" onChange = {(e) => this.updateInput1(e.target.value)} />
                <input className="inputLine" onChange = {(e) => this.updateInput2(e.target.value)}/>
                <button className="confirmationButton" onClick = {() => this.getSum(this.state.number1, this.state.number2)}>Add</button>
                <span className="resultsBox">Sum: {this.state.sum}</span>
            </div>
        )
    }
}

export default Sum