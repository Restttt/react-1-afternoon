import React, {Component} from 'react';

class EvenAndOdd extends Component {
    constructor() {
        super();
        this.state = {
            evenArray: [],
            oddArray: [],
            userInput: '',
        }
    }

    updateInput = (val) => {
        this.setState({userInput: val});
    }

    sortNumbers = () => {
        var arr = this.state.userInput.split(',');
        var evens = [];
        var odds = [];

        for (let i = 0; i < arr.length; i++) {
            if (arr[i] % 2 === 0) {
                evens.push(Number(arr[i]))
            } else {
                odds.push(Number(arr[i]))
            }
        }
        this.setState({evenArray: evens, oddArray: odds});
    }

    render() {
        return (
            <div className="puzzleBox evenAndOddPB">
            <h4>Evens and Odds</h4>
                <input className="inputLine" onChange={(e) => this.updateInput(e.target.value)} />
                <button className="confirmationButton" onClick={() => {this.sortNumbers()}}>Split</button>
                <span className="resultsBox">Evens: {JSON.stringify(this.state.evenArray)}</span>
                <span className="resultsBox">Odds: {JSON.stringify(this.state.oddArray)}</span>
            </div>
        )
    }
}

export default EvenAndOdd