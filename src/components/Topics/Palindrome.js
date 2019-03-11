import React, {Component} from 'react';

class Palindrome extends Component {
    constructor() {
        super()
        this.state = {
            userInput: '',
            palindrome: false,
        }
    }

    updateInput = (val) => {
        this.setState({userInput: val});
    }

    reverseWordTest = (val) => {
        let word = val;
        let wordToReverse = word.split('').reverse().join('');
        let isTrue = false;

        console.log(word);
        console.log(wordToReverse);

        if (word === wordToReverse) {
            isTrue = true;
        }

        this.setState({palindrome: isTrue});
    }

    render() {
        return (
            <div className = "puzzleBox filterObjectPB">
                <h4>Palindrome</h4>
                <input className = "inputLine" onChange = {(e) => this.updateInput(e.target.value)}/>
                <button className = "confirmationButton" onClick = {() => {this.reverseWordTest(this.state.userInput)}}>Filter</button>
                <span className = "resultsBox">Palindrome: {JSON.stringify(this.state.palindrome)}</span>
            </div>
        )
    }
}

export default Palindrome